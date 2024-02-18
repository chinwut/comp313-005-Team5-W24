import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import the auth instance directly if it's exported from your firebase config module

export const createUserWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
