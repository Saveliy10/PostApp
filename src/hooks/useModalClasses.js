import { useMemo } from "react";
import clsx from 'clsx';

export const useModalClasses = (visible) => {
    const rootClasses = useMemo(
        () =>
            clsx(
                'fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300',
                {
                    'opacity-100 pointer-events-auto': visible,
                    'opacity-0 pointer-events-none': !visible,
                }
            ),
        [visible]
    );

    const contentClasses = useMemo(
        () =>
            clsx(
                'bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 max-w-md w-full',
                {
                    'scale-100': visible,
                    'scale-95': !visible,
                }
            ),
        [visible]
    );

    return { rootClasses, contentClasses };
}