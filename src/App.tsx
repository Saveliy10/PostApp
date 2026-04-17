import { HashRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar.tsx';
import AppRouter from './components/appRouter/AppRouter.tsx';
import './styles/App.css';
import AuthContextProvider from './components/authContextProvider/AuthContextProvider.tsx';

function App() {
    return (
        <AuthContextProvider>
            <HashRouter>
                <Navbar />
                <AppRouter />
            </HashRouter>
        </AuthContextProvider>
    );
}

export default App;