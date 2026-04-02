import { useMemo } from "react";

export const usePosts = (posts, sort, query) => {

    const sortedAndSearchedPosts = useMemo(() => {
        let result = posts;
        if (sort) {
            const [field, order] = sort.split('_');

            result = [...posts].sort((a, b) => {
                const compare = a[field].localeCompare(b[field]);

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