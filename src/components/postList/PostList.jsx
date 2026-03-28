import React, { useRef } from 'react';
import PostItem from "../postItem/PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены!
            </h1>
        )
    }

    const nodeRefs = useRef(new Map());

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    if (!nodeRefs.current.has(post.id)) {
                        nodeRefs.current.set(post.id, React.createRef());
                    }
                    const nodeRef = nodeRefs.current.get(post.id);
                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                            nodeRef={nodeRef}
                        >
                            <PostItem 
                                ref={nodeRef}
                                remove={remove} 
                                number={index + 1} 
                                post={post}
                            />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;