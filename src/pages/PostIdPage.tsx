import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from "../hooks/useFetching.ts";
import PostService from "../API/PostService.ts";
import Loader from "../components/UI/Loader/Loader.jsx";
import type { Post } from '../types/posts.ts';
import type { Comment } from '../types/comments.ts';

const PostIdPage: React.FC = () => {

    const params = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    const { fetching: fetchPostById, isLoading, error } = useFetching(async (id: string) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const { fetching: fetchComments, isLoading: isComLoading, error: comError } = useFetching(async (id: string) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        if (params.id) {
            fetchPostById(params.id)
            fetchComments(params.id)
        }
    }, [params.id]);

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post?.id}. {post?.title}</div>
            }

            <h1>
                Комментарии
            </h1>
            
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{ marginTop: 15 }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;