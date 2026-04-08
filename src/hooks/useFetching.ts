import { useState } from "react";

type UseFetchingReturn<T extends any[]> = [
    (...args: T) => Promise<void>,
    boolean,
    string
];

export const useFetching = <T extends any[]>(
    callback: (...args: T) => Promise<void>
): UseFetchingReturn<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetching = async (...args: T): Promise<void> => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error]
}