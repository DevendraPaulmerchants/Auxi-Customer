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
    const [isIconClicked, setIsIconClicked] = useState(false);
    const handleIconClick = () => {
        setIsIconClicked(!isIconClicked);
    }
    return <>
        <div className='hidden sm:block'>
            {isLogin ? <div className='flex gap-2'>
                <Notification />
                <UserMenu />
            </div>
                :
                <div className='flex gap-4 items-center'>
                    {navItem?.map((item) => (
                        <NavLink key={item.title} to={item.path} className={(({ isActive }) => `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] p-2 rounded text-[#083863] font-semibold`)}>{item.title}</NavLink>
                    ))}
                </div>
            }
        </div>
        <div className='relative block md:hidden'>
            <button onClick={() => handleIconClick()}>{!isIconClicked ? <RxHamburgerMenu /> : <IoMdClose />}</button>
            <div className={`absolute -right-[35px] top-[50px] w-[200px] overflow-hidden transition-all bg-white duration-300 ${isIconClicked ? 'h-screen p-4' : 'h-0'}`}>
                {navItem?.map((item) => (
                    <NavLink key={item.title} to={item.path} className={(({ isActive }) => `${isActive ? 'bg-sky-200' : ''} hover:bg-[var(--bg-color)] px-2 rounded text-[#083863] font-semibold whitespace-nowrap block`)}>{item.title}</NavLink>
                ))}
                {isLogin && <div>
                    <p><UserMenu /></p>
                </div>}
            </div>
        </div>
    </>

}

export default Navbar