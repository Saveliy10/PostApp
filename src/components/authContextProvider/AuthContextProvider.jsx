import React, { useEffect, useState } from 'react';
import { AuthContext } from "../../context";

const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('auth'));
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;