import React from 'react';
import type { FC, ChangeEvent, SelectHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn.ts';

interface Option {
    value: string | number;
    name: string;
}

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> & {
    options: Option[];
    defaultValue: number | string;
    value: string | number;
    onChange: (value: string) => void;
};

const MySelect: FC<Props> = ({ options, defaultValue, value, onChange, className, ...props }) => {
    return (
        <select
            className={cn(
                'bg-white/95 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-700 shadow-sm transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 focus:outline-none',
                className
            )}
            value={`${value}`}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                onChange(e.target.value)
            }
            {...props}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={`${option.value}`}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;