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
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center w-full">
            <MyInput
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                placeholder="Search..."
                value={filter.query}
                onChange={e => handleQueryChange(e.target.value)}
            />
            <MySelect
                className="w-full max-w-[240px] bg-slate-950/90 text-slate-100 border-slate-700"
                value={filter.sort}
                onChange={handleSortChange}
                defaultValue="Sort by"
                options={options}
            />
        </div>
    );
};

export default PostFilter;