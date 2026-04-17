import { useCallback, useMemo, useRef, createRef } from 'react';
import type { FC, RefObject, MouseEvent } from 'react';
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

    const handleListClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('button')) {
            return;
        }

        const card = target.closest('[data-post-id]') as HTMLElement | null;
        if (!card) {
            return;
        }

        const postId = card.dataset.postId;
        if (postId) {
            alert(`Post id: ${postId}`);
        }
    }, []);

    const renderedPosts = useMemo(() => posts.map((post) => {
        if (!nodeRefs.current.has(post.id)) {
            nodeRefs.current.set(post.id, createRef<HTMLDivElement>());
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
                    post={post}
                />
            </CSSTransition>
        );
    }), [posts, remove]);

    if (!posts.length && !isPostsLoading) {
        return (
            <h1 className="py-12 text-center text-lg font-semibold text-slate-600">
                Posts not found
            </h1>
        );
    }

    return (
        <div className="space-y-4" onClick={handleListClick}>
            <h1 className="text-center text-2xl font-semibold text-slate-100">{title}</h1>
            <TransitionGroup>{renderedPosts}</TransitionGroup>
        </div>
    );
};

export default PostList;