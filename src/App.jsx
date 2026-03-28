import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/appRouter/AppRouter";
import './styles/App.css';
import AuthContextProvider from './components/authContextProvider/AuthContextProvider';

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContextProvider>
    )
}

export default App;