import React, { useRef } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({ create }) => {
    const titleInputRef = useRef(null);
    const bodyInputRef = useRef(null);

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            title: titleInputRef.current.value,
            body: bodyInputRef.current.value,
            id: Date.now()
        }

        create(newPost);

        titleInputRef.current.value = '';
        bodyInputRef.current.value = '';
    }

    const handleTitleChange = (event) => {
        titleInputRef.current.value = event.target.value;
    }

    const handleBodyChange = (event) => {
        bodyInputRef.current.value = event.target.value;
    }

    return (
        <form>
            <MyInput
                ref={titleInputRef}
                type="text"
                placeholder="Name of Post"
                onChange={handleTitleChange}
            />

            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder="Description of Post"
                onChange={handleBodyChange}
            />

            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;