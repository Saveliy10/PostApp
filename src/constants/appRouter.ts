import type { ComponentType } from 'react';
import About from '../pages/About.tsx';
import Posts from '../pages/Posts.tsx';
import PostIdPage from '../pages/PostIdPage.tsx';
import Login from '../pages/Login.tsx';

interface Route {
    path: string;
    component: ComponentType;
    exact: boolean;
};


export const privateRoutes: Route[] = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes: Route[] = [
    {path: '/login', component: Login, exact: true},
]