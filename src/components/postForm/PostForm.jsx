import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useForm } from 'react-hook-form';
import { postForm } from '../../constants/postForm.js';

const PostForm = ({ create }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const addNewPost = (data) => {
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

                    {errors[field.name] && (
                        <p className="text-red-500 text-sm">
                            {errors[field.name].message}
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
