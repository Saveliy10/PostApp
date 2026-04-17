import React, { useRef } from 'react';
import type { FC, RefObject } from 'react';
import PostItem from "../postItem/PostItem.tsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import type { Post } from "../../types/posts.ts";

interface Props {
    isPostsLoading: boolean;
    posts: Post[];
    title: string;
    remove: (post: Post) => void;
}

const PostList: FC<Props> = ({ isPostsLoading, posts, title, remove }) => {

    const nodeRefs = useRef<Map<number, RefObject<HTMLDivElement>>>(new Map());

    if (!posts.length && !isPostsLoading) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Posts not found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post) => {
                    if (!nodeRefs.current.has(post.id)) {
                        nodeRefs.current.set(post.id, React.createRef<HTMLDivElement>());
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
                                // number={index + 1}
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