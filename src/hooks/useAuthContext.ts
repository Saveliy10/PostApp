import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../context/index.ts';

export const useAuthContext = (): AuthContextType => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error('useAuthContext must be used within AuthContextProvider');
    }

    return auth;
};