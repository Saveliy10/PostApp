import React from 'react';
import MyButton from "../UI/button/MyButton.tsx";
import { usePostItem } from '../../hooks/usePostItem.ts';
import type { Post } from '../../types/posts.ts';

interface Props {
    post: Post;
    remove: (post: Post) => void;
}

const PostItem = React.forwardRef<HTMLDivElement, Props>(({ post, remove }, ref) => {
    const { handleOpen, handleRemove } = usePostItem(post, remove);

    return (
        <div
            ref={ref}
            data-post-id={post.id}
            className="group grid gap-4 rounded-3xl border border-slate-700 bg-slate-950/90 px-6 py-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.65)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-20px_rgba(0,0,0,0.55)]"
        >
            <div className="space-y-2">
                <div className="text-base font-semibold text-slate-100">{post.id}. {post.title}</div>
                <div className="text-sm leading-6 text-slate-400">{post.body}</div>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
                <MyButton className="rounded-2xl bg-slate-700 px-4 py-2 text-slate-100 shadow-none hover:bg-slate-600" onClick={handleOpen}>
                    Open
                </MyButton>
                <MyButton className="rounded-2xl bg-slate-700 px-4 py-2 text-slate-100 shadow-none hover:bg-slate-600" onClick={handleRemove}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
});

export default React.memo(PostItem);