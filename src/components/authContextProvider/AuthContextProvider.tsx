import React from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from "../../context/index.ts";
import { useAuth } from '../../hooks/useAuth.ts';

interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;