import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types/posts.ts';

interface Handlers {
    handleOpen: () => void;
    handleRemove: () => void;
}

export const usePostItem = (post: Post, remove: (post: Post) => void): Handlers => {

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