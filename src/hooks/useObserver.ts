import { useEffect, useRef } from "react";

export const useObserver = (
    ref: React.RefObject<HTMLElement>,
    canLoad: boolean,
    isLoading: boolean,
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;
        if (!ref.current) return;
        if (observer.current) observer.current.disconnect();

        var cb: IntersectionObserverCallback = function (entries) {
            if (entries[0].isIntersecting && canLoad && !isLoading) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);

        return () => {
            observer.current?.disconnect();
        };
    }, [isLoading, canLoad, ref]);
}