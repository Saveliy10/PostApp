import type { FC } from 'react';
import MyInput from '../UI/input/MyInput.tsx';
import MyButton from '../UI/button/MyButton.tsx';
import { useForm } from 'react-hook-form';
import { postForm } from '../../constants/postForm.ts';
import type { SubmitHandler } from 'react-hook-form';
import type { PostFormOptions } from '../../types/postFormOptions.ts';

interface Props {
    create: (data: PostFormOptions & { id: number }) => void;
}

const PostForm: FC<Props> = ({ create }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<PostFormOptions>();

    const addNewPost: SubmitHandler<PostFormOptions> = (data) => {
        create({ ...data, id: Date.now() });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(addNewPost)} className="flex flex-col gap-3">
            {postForm.map((field) => (
                <div key={field.name}>
                    <MyInput
                        {...register(field.name, field.validation)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="border p-2 w-full"
                    />

                    {errors[field.name]?.message && (
                        <p className="text-red-500 text-sm">
                            {errors[field.name]?.message as string}
                        </p>
                    )}
                </div>
            ))}

            <MyButton type="submit">
                Create Post
            </MyButton>
        </form>
    );
};

export default PostForm;
