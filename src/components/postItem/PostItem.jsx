import React, { useCallback } from 'react';
import MyButton from "../UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = React.forwardRef((props, ref) => {
    const navigate = useNavigate()
    const {remove, post} = props;

    const handleOpen = useCallback(() => {
        navigate(`/posts/${post.id}`);
    }, [navigate, post.id]);

    const handleRemove = useCallback(() => {
        remove(post);
    }, [remove, post]);


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