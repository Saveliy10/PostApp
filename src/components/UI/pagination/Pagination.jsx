import React from 'react';
import { getPagesArray } from "../../../utils/pages";
import { cn } from '../../../utils/cn';

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className="mt-7 flex justify-center">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={
                        cn('p-2.5 border border-teal-300 hover:bg-white cursor-pointer',
                            { 'font-bold border-2 border-orange-300': page === p }
                        )}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;