import type { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader.tsx';
import { usePostDetails } from '../hooks/usePostDetails.ts';
import type { Comment } from '../types/comments.ts';

const PostIdPage: FC = () => {

    const { id } = useParams<{ id: string }>();
    const {
        post,
        comments,
        isLoading,
        error,
        isCommentsLoading,
        commentsError,
    } = usePostDetails(id ?? '');

    if (isLoading || isCommentsLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-900">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-900">
                <p className="text-red-400">Error loading post: {error}</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-900">
                <p className="text-red-400">Post not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col gap-6 rounded-[32px] border border-slate-700 bg-slate-900/80 p-8 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">

                    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
                                Post detail
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold text-white">
                                {post.title}
                            </h1>
                        </div>

                        <Link
                            to="/posts"
                            className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition hover:bg-purple-500/20"
                        >
                            Back
                        </Link>
                    </header>

                    <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8">
                        <div className="mb-4 text-sm text-slate-500">
                            Post ID: {id}
                        </div>
                        <p className="text-lg leading-8 text-slate-300">
                            {post.body}
                        </p>
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">
                            Comments
                        </h2>

                        {commentsError ? (
                            <p className="text-red-400">
                                Error: {commentsError}
                            </p>
                        ) : !comments.length ? (
                            <p className="text-slate-400">
                                No comments yet.
                            </p>
                        ) : (
                            <div className="grid gap-4">
                                {comments.map((comment: Comment) => (
                                    <article
                                        key={comment.id}
                                        className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-md"
                                    >
                                        <div className="text-sm font-semibold text-purple-300">
                                            {comment.email}
                                        </div>
                                        <p className="mt-2 text-slate-400">
                                            {comment.body}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PostIdPage;