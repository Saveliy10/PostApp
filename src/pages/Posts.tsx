import { useCallback, useState } from 'react';
import { usePosts } from '../hooks/usePosts.ts';
import MyButton from '../components/UI/button/MyButton.tsx';
import PostForm from '../components/postForm/PostForm.tsx';
import Mymodal from '../components/UI/MyModal/Mymodal.tsx';
import PostFilter from '../components/postFilter/PostFilter.tsx';
import PostList from '../components/postList/PostList.tsx';
import Loader from '../components/UI/Loader/Loader.tsx';
import Pagination from '../components/UI/pagination/Pagination.tsx';
import MySelect from '../components/UI/select/MySelect.tsx';
import { options } from '../constants/posts.ts';
import { usePostsData } from '../hooks/usePostsData.ts';

interface FilterState {
    sort: string;
    query: string;
}

function Posts() {
    const [filter, setFilter] = useState<FilterState>({ sort: '', query: '' });
    const [modal, setModal] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);

    const {
        posts,
        isPostsLoading,
        postError,
        totalPages,
        page,
        lastElement,
        createPost,
        removePost,
        changePage,
    } = usePostsData(limit, setModal);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const openModal = useCallback(() => {
        setModal(true);
    }, []);

    const handleLimitChange = useCallback((value: number) => {
        setLimit(value);
    }, []);

    return (
        <div className="App">
            <MyButton className="mt-7" onClick={openModal}>
                Create Post
            </MyButton>
            <Mymodal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Mymodal>
            <hr className="my-4" />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={handleLimitChange}
                defaultValue="Кол-во элементов на странице"
                options={options}
            />

            {postError && <h1>Произошла ошибка {postError}</h1>}

            {isPostsLoading && (
                <div className="flex justify-center mt-13">
                    <Loader />
                </div>
            )}

            <PostList
                isPostsLoading={isPostsLoading}
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Посты про JS"
            />

            <div ref={lastElement} className="h-5 bg-red-500" />

            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Posts;