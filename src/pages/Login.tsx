import type { FC, FormEvent } from 'react';
import MyInput from '../components/UI/input/MyInput.tsx';
import MyButton from '../components/UI/button/MyButton.tsx';
import { useAuthContext } from '../hooks/useAuthContext.ts';

const Login: FC = () => {
    const { setIsAuth } = useAuthContext();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <MyInput type="text" placeholder="Enter username" />
                <MyInput type="password" placeholder="Enter password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;