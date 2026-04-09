import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Login from "../pages/Login.jsx";

interface Route {
    path: string;
    component: React.ComponentType;
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