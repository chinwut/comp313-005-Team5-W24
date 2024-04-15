import React, { useState } from 'react';
import { K2D } from "next/font/google";
import DashboardLayout from '@/components/dashboard';
import { useLogic } from '@/hooks/index';
import ErrorBoundary from '@/components/error-boundary';

const k2d = K2D({ weight: "800", subsets: ["latin"] })

const PracticePage = () => {

    const [gestureLabel, setGestureLabel] = useState('');
    
    const handleFeedback = (text: string) => {
        // if (isUpdateAllowed) {
        //   setGestureLabel(text); // Perform the update
        //   setIsUpdateAllowed(false); // Block further updates
    
        //   setTimeout(() => {
        //     setIsUpdateAllowed(true);
        //   }, 1000);
        // }
    };

    const handlePlay = async () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance("Testing");
            utterance.rate = 1;
            utterance.pitch = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Speech synthesis not supported in this browser.');
        }
    }

    const { videoElement, maxVideoWidth, maxVideoHeight, canvasEl } = useLogic(handleFeedback);

    return (
        <DashboardLayout>
            <ErrorBoundary>
                <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Practice</h1>
                <video className="hidden" playsInline ref={videoElement} />
                <canvas className="rounded-2xl mt-8" ref={canvasEl} width={maxVideoWidth || 0} height={maxVideoHeight || 0} />
                {/* <p className={`${k2d.className} font-bold max-w-[600px] text-4xl text-orange-500 min-h-11 mb-4`}>{gestureLabel}</p> */}
            </ErrorBoundary>
        </DashboardLayout>
    );
};

export default PracticePage;
