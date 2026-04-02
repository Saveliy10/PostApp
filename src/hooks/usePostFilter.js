import { useCallback } from 'react';

export const usePostFilter = (setFilter) => {

    const handleQueryChange = useCallback((value) => {
        setFilter(prev => ({ ...prev, query: value }));
    }, [setFilter]);

    const handleSortChange = useCallback((selectedSort) => {
        setFilter(prev => ({ ...prev, sort: selectedSort }));
    }, [setFilter]);

    return {
        handleQueryChange,
        handleSortChange
    };
};