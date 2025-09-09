import React, { useContext, useState } from 'react'
import Notification from '../notification/Notification';
import UserMenu from '../userActions/UserMenu';
import { NavLink, } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const navItem = [
    { title: 'Home', path: '/' },
    { title: 'Partner With us', path: '/partner-with-us' },
    { title: 'Contact Us', path: '/contact-us' },
    { title: 'Login', path: '/login' },
    { title: 'Signup', path: '/login' },
]

function Navbar() {
    const { isLogin } = useContext(AuthContext);
    const username = 'Devendra Kumar';

    const [isIconClicked, setIsIconClicked] = useState(false);
    const handleIconClick = () => {
        setIsIconClicked(!isIconClicked);
    }
    return <>
        <div className='hidden sm:block'>
            <div className='flex gap-4 items-center'>
                {navItem
                    .filter(item => item.title !== 'Login' && item.title !== 'Signup')
                    .map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] p-2 rounded text-[#083863] font-semibold`
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                {isLogin ? (
                    <div className='flex gap-2 items-center'>
                        <Notification />
                        <div className='flex items-center'>
                            <UserMenu />
                            <p title={username} className='ml-[-10px]'>{username?.slice(0, 3)}...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] p-2 rounded text-[#083863] font-semibold`
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] p-2 rounded text-[#083863] font-semibold`
                            }
                        >
                            Signup
                        </NavLink>
                    </>
                )}
            </div>
        </div>
        <div className='relative block md:hidden'>
            <button onClick={handleIconClick}>
                {!isIconClicked ? <RxHamburgerMenu /> : <IoMdClose />}
            </button>
            <div className={`absolute -right-[35px] top-[50px] w-[200px] overflow-hidden transition-all bg-white duration-300 ${isIconClicked ? 'h-screen p-4' : 'h-0'}`}>
                {navItem
                    .filter(item => item.title !== 'Login' && item.title !== 'Signup')
                    .map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] px-2 rounded text-[#083863] my-1 whitespace-nowrap block`
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                {isLogin ? (
                    <div className='flex gap-1 items-center mt-2'>
                        <UserMenu />
                        <p title={username} className='ml-[-15px] text-[12px]'>{username}</p>
                    </div>
                ) : (
                    <>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] px-2 rounded text-[#083863] whitespace-nowrap block`
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] px-2 rounded text-[#083863] my-1 whitespace-nowrap block`
                            }
                        >
                            Signup
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    </>
}

export default Navbar;