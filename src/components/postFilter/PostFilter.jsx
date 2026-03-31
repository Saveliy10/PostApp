import React, { useCallback } from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import { options } from '../../constants/postFilter';

const PostFilter = ({ filter, setFilter }) => {

    const handleQueryChange = useCallback((e) => {
        setFilter(prevFilter => ({ ...prevFilter, query: e.target.value }));
    }, [setFilter]);

    const handleSortChange = useCallback((selectedSort) => {
        setFilter(prevFilter => ({ ...prevFilter, sort: selectedSort }));
    }, [setFilter]); 

    return (
        <div>
            <MyInput
                placeholder='Search...'
                onChange = { handleQueryChange }
                value={filter.query}
            />
            <MySelect
                value={filter.sort}
                onChange={handleSortChange}
                defaultValue="Sort by"
                options={options}
            >
            </MySelect>

        </div>
    );
};

export default PostFilter;