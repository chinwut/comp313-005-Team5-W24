import { createContext } from 'react';


// We remove the AuthContext interface and directly pass the default context value.
export const authContext = createContext({
    user: undefined, // Initially, there's no user, indicating the auth state is not determined yet.
    initializing: true // Optional: You might want to track if the authentication is still initializing.
});
