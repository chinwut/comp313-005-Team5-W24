import { useEffect, useRef } from "react";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import useKeyPointClassifier from "../hooks/useKeyPointClassifier";
import CONFIGS from "@/constant/model";
const maxVideoWidth = 960;
const maxVideoHeight = 540;

function useLogic(onGestureChange) {
  const videoElement = useRef(null);
  const hands = useRef(null);
  const camera = useRef(null);
  const canvasEl = useRef(null);
  const handsGesture = useRef([]);

  const { processLandmark } = useKeyPointClassifier();

  useEffect(() => {
    async function initCamera() {
      camera.current = new Camera(videoElement.current, {
        onFrame: async () => {
          await hands.current.send({ image: videoElement.current });
        },
        width: maxVideoWidth,
        height: maxVideoHeight,
      });
      camera.current.start();
    }

    initCamera();
    loadHands();

    return () => {
      if (camera.current) {
        camera.current.stop();
      }
    };
  }, [onGestureChange]);


  async function onResults(results) {
    if (canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      ctx.save();
      ctx.clearRect(0, 0, canvasEl.current.width, canvasEl.current.height);
      ctx.drawImage(results.image, 0, 0, maxVideoWidth, maxVideoHeight);

      if (results.multiHandLandmarks) {
        for (const [index, landmarks] of results.multiHandLandmarks.entries()) {
          processLandmark(landmarks, results.image).then(
            (val) => {
              handsGesture.current[index] = val
              onGestureChange(`${CONFIGS.keypointClassifierLabels[val] || ""}`)
            }
          );
          ctx.fillStyle = "#ff0000";
          ctx.font = "24px serif";
          const landmarksX = landmarks.map((landmark) => landmark.x);
          const landmarksY = landmarks.map((landmark) => landmark.y);
          ctx.fillStyle = "#ff0000";
          ctx.font = "24px serif";
          ctx.fillText(
            CONFIGS.keypointClassifierLabels[handsGesture.current[index]],
            maxVideoWidth * Math.min(...landmarksX),
            maxVideoHeight * Math.min(...landmarksY) - 15
          );
          drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
            color: "#00ffff",
            lineWidth: 2,
          });
          drawLandmarks(ctx, landmarks, {
            color: "#ffff29",
            lineWidth: 1,
          });
        }
      }
      ctx.restore();
    }
  }

  const loadHands = () => {
    hands.current = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.current.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.9,
      minTrackingConfidence: 0.9,
    });
    hands.current.onResults(onResults);
  };

  return { maxVideoHeight, maxVideoWidth, canvasEl, videoElement };
}

export { useLogic };
export { useWindowDimensions } from "./useWindowDimensions";
export { useError } from "./useError";