import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import MyButton from "../button/MyButton.tsx";
import { AuthContext } from "../../../context/index.ts";
import { navLinks } from "../../../constants/navbar.ts";
import { cn } from '../../../utils/cn.ts';


const Navbar: React.FC = () => {
    const { isAuth, logout } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div className='h-15 w-screen flex items-center justify-between px-5 bg-linear-to-br from-[#667eea] to-[#764ba2] shadow-[0_2px_10px_rgba(0,0,0,0.1)] sticky top-0 z-100'>
            <div className='flex items-center gap-5'>
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={
                            cn('text-white no-underline font-medium text-base py-2 px-4 rounded-3xl relative ease-in-out transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]',
                                {
                                    'font-semibold bg-white/30 after:absolute after:content-[""] after:-bottom-1.25 after:left-1/2 after:w-5 after:h-0.5 after:bg-white after:rounded-[1px] after:-translate-x-1/2': location.pathname === link.to
                                }
                            )
                        }
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            {isAuth &&
                <MyButton className="text-white bg-white/20 border border-white/30 font-medium hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]" onClick={logout}>
                    Log Out
                </MyButton>
            }
        </div>
    );
};

export default Navbar;