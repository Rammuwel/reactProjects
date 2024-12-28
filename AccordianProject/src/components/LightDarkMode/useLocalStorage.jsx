import React, { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (e) {
            console.error("Error reading localStorage key:", key, e);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error("Error setting localStorage key:", key, e);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
