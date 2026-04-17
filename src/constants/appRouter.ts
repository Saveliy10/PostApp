import type { ComponentType } from 'react';
import About from '../pages/About.tsx';
import Posts from '../pages/Posts.tsx';
import PostIdPage from '../pages/PostIdPage.tsx';
import Login from '../pages/Login.tsx';

interface Route {
    path: string;
    pageToRender: ComponentType;
    exact: boolean;
};


export const privateRoutes: Route[] = [
    {path: '/about', pageToRender: About, exact: true},
    {path: '/posts', pageToRender: Posts, exact: true},
    {path: '/posts/:id', pageToRender: PostIdPage, exact: true},
]

export const publicRoutes: Route[] = [
    {path: '/login', pageToRender: Login, exact: true},
]