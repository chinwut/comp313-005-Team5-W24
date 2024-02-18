// Assuming ../firebase exports the initialized `auth` object
import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";

export const loginAnonymously = async () => {
  const userCredential = await signInAnonymously(auth);
  return userCredential.user; // Directly return the user object
};
