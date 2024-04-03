import { initializeApp, getApp, getApps } from 'firebase/app';
import { firebaseConfig } from '../constant/firebase-key';
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export default app;