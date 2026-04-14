import { useParams, Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader.tsx';
import { usePostDetails } from '../hooks/usePostDetails.ts';
import type { Comment } from '../types/comments.ts';

const PostIdPage = () => {
    const { id } = useParams<{ id: string }>();
    const {
        post,
        comments,
        isLoading,
        error,
        isCommentsLoading,
        commentsError,
    } = usePostDetails(id);

    const renderComments = () => {
        if (isCommentsLoading) {
            return <Loader />;
        }

        if (commentsError) {
            return <p className="text-red-500">Ошибка: {commentsError}</p>;
        }

        if (!comments.length) {
            return <p className="text-gray-500">Пока нет комментариев.</p>;
        }

        return (
            <div className="grid gap-4">
                {comments.map((comment: Comment) => (
                    <article key={comment.id} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                        <div className="text-sm font-semibold text-slate-800">{comment.email}</div>
                        <p className="mt-2 text-slate-600">{comment.body}</p>
                    </article>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
                    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Post detail</p>
                            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                                {post ? post.title : 'Пост не найден'}
                            </h1>
                        </div>
                        <Link to="/posts" className="inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                            Назад к списку
                        </Link>
                    </header>

                    {isLoading ? (
                        <div className="flex justify-center py-16">
                            <Loader />
                        </div>
                    ) : error ? (
                        <p className="text-red-500">Ошибка загрузки поста: {error}</p>
                    ) : (
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                            <div className="mb-4 text-sm text-slate-500">Post ID: {id}</div>
                            <p className="text-lg leading-8 text-slate-700">{post?.body}</p>
                        </div>
                    )}

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Комментарии</h2>
                        {renderComments()}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PostIdPage;