import React from 'react';
import { AuthContext } from "../../context";
import { useAuth } from '../../hooks/useAuth';

const AuthContextProvider = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;