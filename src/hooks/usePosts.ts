import { useMemo } from "react";
import type { Post } from "../types/posts.ts";

export const usePosts = (posts: Post[], sort: string, query: string): Post[] => {

    const sortedAndSearchedPosts = useMemo(() => {
        let result = posts;
        if (sort) {
            const [field, order] = sort.split('_') as [SortField: keyof Post, SortOrder: 'asc' | 'desc'];

            result = [...posts].sort((a, b) => {
                const aValue = String(a[field]);
                const bValue = String(b[field]);

                const compare = aValue.localeCompare(bValue);

                return order === 'asc' ? compare : -compare;
            });
        }

        if (query) {
            result = result.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.body.toLowerCase().includes(query.toLowerCase())
            );
        }

        return result;
    }, [posts, sort, query]);

    return sortedAndSearchedPosts;
}