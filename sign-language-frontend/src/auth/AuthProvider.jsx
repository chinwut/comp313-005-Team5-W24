import { useContext } from 'react';
import { authContext } from './authContext';
// Updated imports for Firebase v9+
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import config from '../firebase/config'; // Ensure you have a config file or replace this import with your Firebase config object directly

// Initialize Firebase app
const app = initializeApp(config);
// Get auth service instance
const auth = getAuth(app);

export const AuthProvider = ({ onLoading, onError, children }) => {
    const [user, initializing, error] = useAuthState(auth);

    if (initializing) return onLoading();
    if (error) return onError(error);

    return (
        <authContext.Provider value={{ user, initializing }}>
            {children}
        </authContext.Provider>
    );
};
