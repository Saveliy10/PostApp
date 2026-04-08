import { useEffect, useState } from 'react';

type AuthContextType = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
};

const AUTH_KEY = 'auth' as const;


export const useAuth = (): AuthContextType => {
    const [isAuth, setIsAuth] = useState<boolean>(() => !!localStorage.getItem(AUTH_KEY));
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (localStorage.getItem(AUTH_KEY)) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    const login = () => {
        localStorage.setItem(AUTH_KEY, 'true');
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem(AUTH_KEY);
        setIsAuth(false);
    };

    return {
        isAuth,
        setIsAuth,
        isLoading,
        login,
        logout
    };
};