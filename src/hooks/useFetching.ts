import { useCallback, useState } from "react";

interface UseFetchingReturn<T extends unknown[]> {
    fetching: (...args: T) => Promise<void>;
    isLoading: boolean;
    error: string;
}

export const useFetching = <T extends unknown[]>(
    callback: (...args: T) => Promise<void>
): UseFetchingReturn<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetching = useCallback(async (...args: T): Promise<void> => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsLoading(false);
        }
    }, [callback]);

    return { fetching, isLoading, error };
};