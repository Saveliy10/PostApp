import { useEffect, useRef, useState } from 'react';
import PostService from "../API/PostService.jsx";
import { useFetching } from "./useFetching.js";
import { getPageCount } from "../utils/pages.js";
import { useObserver } from "./useObserver.js";
import type { Post } from '../types/posts.ts';

interface UsePostsDataReturnType {
    posts: Post[];
    isPostsLoading: boolean;
    postError: any;
    totalPages: number;
    page: number;
    lastElement: React.RefObject<HTMLElement>;
    createPost: (newPost: Post) => void;
    removePost: (post: Post) => void;
    changePage: (page: number) => void;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};


export const usePostsData =
    (limit: number, setModal: React.Dispatch<React.SetStateAction<boolean>>): UsePostsDataReturnType => {

        const [posts, setPosts] = useState<Post[]>([]);
        const [totalPages, setTotalPages] = useState<number>(0);
        const [page, setPage] = useState<number>(1);
        const lastElement = useRef<HTMLElement | null>(null);

        const {fetching: fetchPosts, isLoading: isPostsLoading, error: postError} = useFetching(async (limit: number, page: number  ) => {
            const response = await PostService.getAll(limit, page);

            if (page === 1) {
                setPosts(response.data);
            } else {
                setPosts(prev => [...prev, ...response.data]);
            }

            const totalCount = response.headers['x-total-count'];
            setTotalPages(getPageCount(totalCount, limit));
        });

        useObserver(lastElement, page < totalPages, isPostsLoading, () => {
            setPage(prev => prev + 1);
        });

        // useEffect(() => {
        //     setPosts([]);
        //     setPage(1);
        // }, [limit]);

        useEffect(() => {
            fetchPosts(limit, page)
        }, [page, limit]);

        const createPost = (newPost: Post) => {
            setPosts(prev => [...prev, newPost]);
            setModal(false);
        }

        // Получаем post из дочернего компонента
        const removePost = (post: Post) => {
            setPosts(prev => prev.filter(p => p.id !== post.id))
        }

        const changePage = (page: number) => {
            setPage(page)
        }

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