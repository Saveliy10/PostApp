import React from 'react';
import MyButton from "../UI/button/MyButton.tsx";
import { usePostItem } from '../../hooks/usePostItem.ts';
import type { Post } from '../../types/posts.ts';

interface Props {
    post: Post;
    remove: (post: Post) => void;
}

const PostItem = React.forwardRef<HTMLDivElement, Props>(({ post, remove }, ref) => {
    const { handleOpen, handleRemove, handleShowId } = usePostItem(post, remove);

    return (
        <div ref={ref} className="post" onClick={handleShowId}>
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={handleOpen}>
                    Open
                </MyButton>
                <MyButton onClick={handleRemove}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
});

export default React.memo(PostItem);