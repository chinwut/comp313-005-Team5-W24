// Import the functions needed from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import config from './config';

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Configure Firebase services for development environment
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // Adjust these ports to match your configuration
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
}

export {
    db,
    auth,
    config,
    functions,
};
