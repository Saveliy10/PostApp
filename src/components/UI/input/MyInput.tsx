import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

type MyInputProps = InputHTMLAttributes<HTMLInputElement>;


const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    return (
        <input
            {...props}
            className="w-full py-1.5 px-3.5 my-3.5 mx-0 border border-teal-500"
            ref={ref}
        />
    );
});

export default MyInput;