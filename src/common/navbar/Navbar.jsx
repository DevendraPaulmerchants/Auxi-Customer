import React, { useContext } from 'react'
import Notification from '../notification/Notification';
import UserMenu from '../userActions/UserMenu';
import { NavLink, } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
    const {isLogin}=useContext(AuthContext);

    const navItem=[
        { title: 'Partner With us', path: '/partner_with_us' },
        { title: 'Contact Us', path: '/contact_us' },
        { title: 'Login', path: '/login' },
        { title: 'Signup', path: '/login' },
    ]
    return (
        <div className=''>
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
    )
}

export default Navbar