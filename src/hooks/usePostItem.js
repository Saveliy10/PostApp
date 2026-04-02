import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePostItem = (post, remove) => {
    const navigate = useNavigate();

    const handleOpen = useCallback(() => {
        navigate(`/posts/${post.id}`);
    }, [navigate, post.id]);

    const handleRemove = useCallback(() => {
        remove(post);
    }, [remove, post]);

    return {
        handleOpen,
        handleRemove
    };
};