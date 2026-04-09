import { useCallback } from 'react';

interface PostFilterReturnType {
    query: string;
    sort: string;
}

export const usePostFilter = (setFilter: React.Dispatch<React.SetStateAction<PostFilterReturnType>>) => {

    const handleQueryChange = useCallback((value: string) => {
        setFilter(prev => ({ ...prev, query: value }));
    }, [setFilter]);

    const handleSortChange = useCallback((selectedSort: string) => {
        setFilter(prev => ({ ...prev, sort: selectedSort }));
    }, [setFilter]);

    return {
        handleQueryChange,
        handleSortChange
    };
};