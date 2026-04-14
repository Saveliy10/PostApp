import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../constants/appRouter.ts';
import { useAuthContext } from '../../hooks/useAuthContext.ts';
import Loader from '../UI/Loader/Loader.tsx';

const AppRouter = () => {
    const { isAuth, isLoading } = useAuthContext();

    if (isLoading) {
        return <Loader />;
    }

    return (
        isAuth ? (
            <Routes>
                {privateRoutes.map(route => {
                    const Component = route.component;
                    return (
                        <Route
                            element={<Component />}
                            path={route.path}
                            key={route.path}
                        />
                    );
                })}
                <Route path="*" element={<Navigate to="/posts" />} />
            </Routes>
        ) : (
            <Routes>
                {publicRoutes.map(route => {
                    const Component = route.component;
                    return (
                        <Route
                            element={<Component />}
                            path={route.path}
                            key={route.path}
                        />
                    );
                })}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        )
    );
};

export default AppRouter;