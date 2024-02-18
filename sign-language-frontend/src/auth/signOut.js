import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth instance from your Firebase config module

export const signOutUser = async () => await signOut(auth)
