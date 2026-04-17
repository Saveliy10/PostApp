import MyButton from '../components/UI/button/MyButton.tsx';
import PostForm from '../components/postForm/PostForm.tsx';
import Mymodal from '../components/UI/MyModal/Mymodal.tsx';
import PostFilter from '../components/postFilter/PostFilter.tsx';
import PostList from '../components/postList/PostList.tsx';
import Loader from '../components/UI/Loader/Loader.tsx';
//import Pagination from '../components/UI/pagination/Pagination.tsx';
import MySelect from '../components/UI/select/MySelect.tsx';
import { options } from '../constants/posts.ts';
import { usePostsPage } from '../hooks/usePostsPage.ts';

function Posts() {
    const {
        filter,
        setFilter,
        modal,
        openModal,
        closeModal,
        limit,
        handleLimitChange,
        sortedAndSearchedPosts,
        isPostsLoading,
        postError,
        lastElement,
        createPost,
        removePost,
        showLoader,
    } = usePostsPage();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10 text-slate-100">
            <div className="mx-auto w-full max-w-6xl space-y-8">
                <div className="rounded-4xl border border-slate-700 bg-slate-900/80 p-6 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl md:flex md:items-end md:justify-between md:gap-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Posts dashboard</p>
                        <h1 className="mt-3 text-4xl font-semibold text-white">Post Explorer</h1>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">Search, sort and manage your posts in one polished interface with smooth loading and consistent styling.</p>
                    </div>

                    <MyButton className="rounded-full bg-cyan-500 px-6 py-3 text-white shadow-[0_20px_45px_rgba(34,211,238,0.2)] hover:bg-cyan-400" onClick={openModal}>
                        Create Post
                    </MyButton>
                </div>

                <Mymodal visible={modal} setVisible={closeModal}>
                    <PostForm create={createPost} />
                </Mymodal>

                <div className="rounded-4xl border border-slate-700 bg-slate-900/80 p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <PostFilter filter={filter} setFilter={setFilter} />
                        <div className="w-full max-w-55 lg:max-w-[260px]">
                            <MySelect
                                value={limit}
                                onChange={handleLimitChange}
                                defaultValue="Кол-во элементов на странице"
                                options={options}
                                className="w-full bg-slate-950/90 text-slate-100 border-slate-700"
                            />
                        </div>
                    </div>
                </div>

                {postError && <h1 className="text-sm font-semibold text-red-400">Произошла ошибка {postError}</h1>}

                {showLoader && (
                    <div className="flex justify-center py-12">
                        <Loader />
                    </div>
                )}

                <PostList
                    isPostsLoading={isPostsLoading}
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title="Посты про JS"
                />
            </div>

            <div ref={lastElement} className="h-6" />
        </div>
    );
}

export default Posts;