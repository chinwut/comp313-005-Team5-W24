// Assuming ../firebase exports the initialized `auth` object
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user; // Directly return the user object
};
