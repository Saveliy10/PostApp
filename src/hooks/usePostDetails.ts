import { useCallback, useEffect, useState } from 'react';
import { useFetching } from './useFetching.ts';
import PostService from '../API/PostService.ts';
import type { Post } from '../types/posts.ts';
import type { Comment } from '../types/comments.ts';

interface UsePostDetailsResult {
    post: Post | null;
    comments: Comment[];
    isLoading: boolean;
    error: string;
    isCommentsLoading: boolean;
    commentsError: string;
}

export const usePostDetails = (id: string | undefined): UsePostDetailsResult => {
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    const handleFetchPost = useCallback(async (postId: string) => {
        const response = await PostService.getById(postId);
        setPost(response.data);
    }, []);

    const handleFetchComments = useCallback(async (postId: string) => {
        const response = await PostService.getCommentsByPostId(postId);
        setComments(response.data);
    }, []);

    const { fetching: fetchPostById, isLoading, error } = useFetching(handleFetchPost);
    const { fetching: fetchComments, isLoading: isCommentsLoading, error: commentsError } = useFetching(handleFetchComments);

    useEffect(() => {
        if (!id) {
            setPost(null);
            setComments([]);
            return;
        }

        fetchPostById(id);
        fetchComments(id);
    }, [id, fetchPostById, fetchComments]);

    return {
        post,
        comments,
        isLoading,
        error,
        isCommentsLoading,
        commentsError,
    };
};