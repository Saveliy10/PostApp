import clsx from 'clsx';

interface ModalClasses {
    rootClasses: string;
    contentClasses: string;
}

export const useModalClasses = (visible: boolean): ModalClasses => {
    const rootClasses = clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300',
        visible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
    );

    const contentClasses = clsx(
        'relative z-50 max-w-md w-full rounded-3xl bg-gray-800 p-6 shadow-[0_32px_80px_rgba(15,23,42,0.35)] transition-transform duration-300',
        visible
            ? 'scale-100'
            : 'scale-95'
    );

    return { rootClasses, contentClasses };
}