import { useCallback, useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from 'react';
import PostService from '../API/PostService.ts';
import { useFetching } from './useFetching.ts';
import { getPageCount } from '../utils/pages.ts';
import { useObserver } from './useObserver.ts';
import type { Post } from '../types/posts.ts';

interface UsePostsDataReturnType {
    posts: Post[];
    isPostsLoading: boolean;
    postError: string;
    totalPages: number;
    page: number;
    lastElement: RefObject<HTMLDivElement | null>;
    createPost: (newPost: Post) => void;
    removePost: (post: Post) => void;
    changePage: (page: number) => void;
    setPage: Dispatch<SetStateAction<number>>;
    setPosts: Dispatch<SetStateAction<Post[]>>;
};


export const usePostsData =
    (
        limit: number,
        setModal: Dispatch<SetStateAction<boolean>>,
        pauseLoading = false
    ): UsePostsDataReturnType => {

        const [posts, setPosts] = useState<Post[]>([]);
        const [totalPages, setTotalPages] = useState<number>(0);
        const [page, setPage] = useState<number>(1);
        const lastElement = useRef<HTMLDivElement | null>(null);

        const fetchPostsCallback = useCallback(async (limit: number, page: number) => {
            const response = await PostService.getAll(limit, page);

            if (page === 1) {
                setPosts(response.data);
            } else {
                setPosts(prev => [...prev, ...response.data]);
            }

            const totalCount = response.headers['x-total-count'];
            setTotalPages(getPageCount(totalCount, limit));
        }, []);

        const { fetching: fetchPosts, isLoading: isPostsLoading, error: postError } = useFetching(fetchPostsCallback);

        useObserver(lastElement, page < totalPages && !pauseLoading, isPostsLoading, () => {
            setPage(prev => prev + 1);
        });

        useEffect(() => {
            setPosts([]);
            setPage(1);
        }, [limit]);

        useEffect(() => {
            if (pauseLoading) return;
            fetchPosts(limit, page);
        }, [page, limit, pauseLoading, fetchPosts]);

        const createPost = useCallback((newPost: Post) => {
            setPosts(prev => [...prev, newPost]);
            setModal(false);
        }, [setModal]);

        // Получаем post из дочернего компонента
        const removePost = useCallback((post: Post) => {
            setPosts(prev => prev.filter(p => p.id !== post.id));
        }, []);

        const changePage = useCallback((page: number) => {
            setPage(page);
        }, []);

        return {
            posts,
            isPostsLoading,
            postError,
            totalPages,
            page,
            lastElement,
            createPost,
            removePost,
            changePage,
            setPage,
            setPosts
        };
    }