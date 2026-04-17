import type { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn.ts';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const MyButton: FC<Props> = ({ children, className, ...props }) => {
    const buttonClass = cn(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2',
        'border border-transparent bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-500/30',
        className
    );

    return (
        <button {...props} className={buttonClass}>
            {children}
        </button>
    );
};

export default MyButton;