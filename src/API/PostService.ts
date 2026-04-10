import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Post } from "../types/posts.ts";
import type { Comment } from "../types/comments.ts";

export default class PostService {

    static async getAll(limit = 10, page = 1): Promise<AxiosResponse<Post[]>> {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id: string): Promise<AxiosResponse<Post>> {
        const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id: string): Promise<AxiosResponse<Comment[]>> {
        const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}