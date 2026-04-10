import { createContext } from "react";

export interface AuthContextType {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);