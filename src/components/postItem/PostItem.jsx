import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from 'react-router-dom';

//обернуть в memo

const PostItem = React.forwardRef((props, ref) => {
    const navigate = useNavigate()

    return (
        <div ref={ref} className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
});

export default React.memo(PostItem);