export const postForm = [
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