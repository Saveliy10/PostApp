import React, { useState } from 'react';
import { usePosts } from "../hooks/usePosts";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/postForm/PostForm.jsx"
import Mymodal from "../components/UI/MyModal/Mymodal.jsx";
import PostFilter from "../components/postFilter/PostFilter.jsx";
import PostList from "../components/postList/PostList.jsx";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";
import { options } from '../constants/posts.js';
import { usePostsData } from '../hooks/usePostsData.js';


function Posts() {
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [limit, setLimit] = useState(10);

    const {
        posts,
        isPostsLoading,
        postError,
        totalPages,
        page,
        lastElement,
        createPost,
        removePost,
        changePage
    } = usePostsData(limit, setModal);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <Mymodal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Mymodal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={options}
            />

            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }

            {isPostsLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
            )}


            <PostList
                isPostsLoading={isPostsLoading}
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Посты про JS"
            />


            <div ref={lastElement} style={{ height: 20, background: 'red' }} />

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;