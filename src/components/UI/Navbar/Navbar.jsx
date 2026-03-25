import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import { navLinks } from "../../../constants/navbar";
import './Navbar.module.css';

const Navbar = () => {
    //вынести логику
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const location = useLocation();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            {isAuth &&
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            }
            <div className="navbar__links">
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;