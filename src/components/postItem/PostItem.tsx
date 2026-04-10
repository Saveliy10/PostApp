import React from 'react';
import MyButton from "../UI/button/MyButton.tsx";
import { usePostItem } from '../../hooks/usePostItem.ts';
import type { Post } from '../../types/posts.ts';

interface PostItemProps {
    post: Post;
    remove: (post: Post) => void;
}

const PostItem = React.forwardRef<HTMLDivElement, PostItemProps>(({ post, remove }, ref) => {
    const { handleOpen, handleRemove } = usePostItem(post, remove);

    return (
        <div ref={ref} className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={handleOpen}>
                    Открыть
                </MyButton>
                <MyButton onClick={handleRemove}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
});

export default React.memo(PostItem);