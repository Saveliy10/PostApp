import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import { options } from '../../constants/postFilter';
import { usePostFilter } from '../../hooks/usePostFilter';

const PostFilter = ({ filter, setFilter }) => {

    const { handleQueryChange, handleSortChange } = usePostFilter(setFilter);

    return (
        <div>
            <MyInput
                placeholder="Search..."
                defaultValue={filter.query}
                onChange={(e) => handleQueryChange(e.target.value)}
            />

            <MySelect
                value={filter.sort}
                onChange={handleSortChange}
                defaultValue="Sort by"
                options={options}
            />
        </div>
    );
};

export default PostFilter;