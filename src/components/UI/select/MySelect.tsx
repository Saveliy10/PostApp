import React from 'react';

interface Option {
    value: number;
    name: string;
}

interface MySelectProps {
    options: Option[];
    defaultValue: number | string;
    value: number;
    onChange: (value: number) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(Number(e.target.value))
            }
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;