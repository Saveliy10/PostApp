import React from 'react';
import type { FC, ChangeEvent } from 'react';

interface Option {
    value: string | number;
    name: string;
}

interface Props {
    options: Option[];
    defaultValue: number | string;
    value: string | number;
    onChange: (value: string) => void;
}

const MySelect: FC<Props> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={`${value}`}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                onChange(e.target.value)
            }
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