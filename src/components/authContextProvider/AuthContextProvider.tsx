import React from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from "../../context/index.ts";
import { useAuth } from '../../hooks/useAuth.ts';

interface Props {
    children: ReactNode;
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;