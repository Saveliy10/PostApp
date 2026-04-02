import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('auth'));
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    const login = () => {
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem('auth');
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