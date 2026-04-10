import type { RegisterOptions } from "react-hook-form";

export interface FormFieldType<T> {
    name: keyof T;
    type: string;
    placeholder: string;
    validation: RegisterOptions<T>;
}