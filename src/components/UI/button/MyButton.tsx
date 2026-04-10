import React from 'react';
import { cn } from '../../../utils/cn.ts';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ children, className, ...props }) => {

    const buttonClass = cn(
        'px-4 py-2 text-teal-600 text-[14px] bg-transparent border border-teal-600 cursor-pointer rounded-[20px] hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-teal-600/10 hover:-translate-y-[1px]',
        className
    );

    return (
        <button {...props} className={buttonClass}>
            {children}
        </button>
    );
};

export default MyButton;