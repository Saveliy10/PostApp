import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import { navLinks } from "../../../constants/navbar";
import styles from './Navbar.module.css';

const Navbar = () => {
    //вынести логику
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const location = useLocation();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__links}>
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`${styles.navbar__link} ${location.pathname === link.to ? styles['navbar__link--active'] : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            {isAuth &&
                <MyButton className="navbarBtn" onClick={logout}>
                    Выйти
                </MyButton>
            }
        </div>
    );
};

export default Navbar;