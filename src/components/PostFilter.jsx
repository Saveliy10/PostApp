import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder='Search...'
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => {setFilter({...filter, sort: selectedSort})}}
                defaultValue="Sort by"
                options={[
                    { value: 'title', name: 'By Name' },
                    { value: 'body', name: 'By Description' }
                ]}
            >
            </MySelect>

        </div>
    );
};

export default PostFilter;