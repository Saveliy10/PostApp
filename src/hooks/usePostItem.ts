import { useCallback, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types/posts.ts';

interface Handlers {
    handleOpen: (event: MouseEvent<HTMLButtonElement>) => void;
    handleRemove: (event: MouseEvent<HTMLButtonElement>) => void;
    handleShowId: () => void;
}

export const usePostItem = (post: Post, remove: (post: Post) => void): Handlers => {

    const navigate = useNavigate();

    const handleOpen = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        navigate(`/posts/${post.id}`);
    }, [navigate, post.id]);

    const handleRemove = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        remove(post);
    }, [remove, post]);

    const handleShowId = useCallback(() => {
        alert(`Post id: ${post.id}`);
    }, [post.id]);

    return {
        handleOpen,
        handleRemove,
        handleShowId,
    };
};