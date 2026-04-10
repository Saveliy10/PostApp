import type { PostFormOptions } from "../types/postFormOptions.ts";
import type { FormFieldType } from "../types/formFieldType.ts";


// interface FormFieldType {
//     name: string;
//     type: string;
//     placeholder: string;
//     validation: {
//         required: string;
//         minLength?: {
//             value: number;
//             message: string;
//         };
//     };
// };

export const postForm: FormFieldType<PostFormOptions>[] = [
    {
        name: 'title',
        type: 'text',
        placeholder: 'Name of Post',
        validation: {
            required: 'Введите заголовок',
            minLength: {
                value: 3,
                message: 'Минимум 3 символа'
            }
        }
    },
    {
        name: 'body',
        type: 'text',
        placeholder: 'Description of Post',
        validation: {
            required: 'Введите описание'
        }
    }
];