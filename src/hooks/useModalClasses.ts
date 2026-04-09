import clsx from 'clsx';

interface ModalClasses {
    rootClasses: string;
    contentClasses: string;
}

export const useModalClasses = (visible: boolean): ModalClasses => {
    const rootClasses = clsx(
        'fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300',
        visible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
    );

    const contentClasses = clsx(
        'bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 max-w-md w-full',
        visible
            ? 'scale-100'
            : 'scale-95'
    );

    return { rootClasses, contentClasses };
}