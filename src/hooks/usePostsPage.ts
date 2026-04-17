import { useCallback, useEffect, useState, type Dispatch, type RefObject, type SetStateAction } from 'react';
import { usePosts } from './usePosts.ts';
import { usePostsData } from './usePostsData.ts';
import type { Post } from '../types/posts.ts';

interface FilterState {
    sort: string;
    query: string;
}

interface UsePostsPageReturn {
    filter: FilterState;
    setFilter: Dispatch<SetStateAction<FilterState>>;
    modal: boolean;
    openModal: () => void;
    closeModal: () => void;
    limit: number;
    handleLimitChange: (value: string) => void;
    sortedAndSearchedPosts: Post[];
    isPostsLoading: boolean;
    postError: string;
    lastElement: RefObject<HTMLDivElement | null>;
    createPost: (newPost: Post) => void;
    removePost: (post: Post) => void;
    showLoader: boolean;
}

export const usePostsPage = (): UsePostsPageReturn => {
    const [filter, setFilter] = useState<FilterState>({ sort: '', query: '' });
    const [debouncedQuery, setDebouncedQuery] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);
    const [showLoader, setShowLoader] = useState<boolean>(false);

    const isSearchActive = filter.query.trim() !== '';

    const {
        posts,
        isPostsLoading,
        postError,
        lastElement,
        createPost,
        removePost,
    } = usePostsData(limit, setModal, isSearchActive);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(filter.query);
        }, 500);

        return () => clearTimeout(handler);
    }, [filter.query]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;

        if (isPostsLoading) {
            timer = setTimeout(() => {
                setShowLoader(true);
            }, 300);
        } else {
            setShowLoader(false);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isPostsLoading]);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, debouncedQuery);

    const openModal = useCallback(() => {
        setModal(true);
    }, []);

    const closeModal = useCallback(() => {
        setModal(false);
    }, []);

    const handleLimitChange = useCallback((value: string) => {
        setLimit(Number(value));
    }, []);

    return {
        filter,
        setFilter,
        modal,
        openModal,
        closeModal,
        limit,
        handleLimitChange,
        sortedAndSearchedPosts,
        isPostsLoading,
        postError,
        lastElement,
        createPost,
        removePost,
        showLoader,
    };
};
