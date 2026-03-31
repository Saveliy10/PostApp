import React, { useEffect, useRef, useState } from 'react';
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";


export const usePostsData = (limit, setModal) => {

    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
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

    const createPost = (newPost) => {
        setPosts(prev => [...prev, newPost]);
        setModal(false);
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(prev => prev.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
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