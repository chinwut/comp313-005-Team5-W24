import { useState } from 'react';

export const useError = () => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const setError = (error) => {
        setHasError(true);
        setErrorMessage(error);
    };

    const clear = () => {
        setHasError(false);
        setErrorMessage("");
    };

    return { hasError, errorMessage, setError, clear };
};
