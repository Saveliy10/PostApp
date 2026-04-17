import type { Dispatch, SetStateAction, FC } from 'react';
import MyInput from '../UI/input/MyInput.tsx';
import MySelect from '../UI/select/MySelect.tsx';
import { options } from '../../constants/postFilter.ts';
import { usePostFilter } from '../../hooks/usePostFilter.ts';

interface FilterState {
    sort: string;
    query: string;
}

interface Props {
    filter: FilterState;
    setFilter: Dispatch<SetStateAction<FilterState>>;
}

const PostFilter: FC<Props> = ({ filter, setFilter }) => {
    const { handleQueryChange, handleSortChange } = usePostFilter(setFilter);

    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={e => handleQueryChange(e.target.value)}
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