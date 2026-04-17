import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface PostFilterReturnType {
    query: string;
    sort: string;
}

export const usePostFilter = (setFilter: Dispatch<SetStateAction<PostFilterReturnType>>) => {

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