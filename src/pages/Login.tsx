import { type FormEvent } from 'react';
import MyInput from '../components/UI/input/MyInput.tsx';
import MyButton from '../components/UI/button/MyButton.tsx';
import { useAuthContext } from '../hooks/useAuthContext.ts';

const Login = () => {
    const { setIsAuth } = useAuthContext();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин" />
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;