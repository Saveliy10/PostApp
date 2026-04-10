import React from 'react';

interface Option {
    value: string;
    name: string;
}

interface MySelectProps {
    options: Option[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(e.target.value)
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