import React, { useContext } from 'react'
import { TbUserCircle } from 'react-icons/tb';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function UserMenu() {
    const { setIsLogin } = useContext(AuthContext);

    const handleLogOut = () => {
        setIsLogin(false)
    }
    
    return (
        <Dropdown>
            <MenuButton>
                <TbUserCircle fontSize={28} color='#083863' />
            </MenuButton>
            <Menu>
                <MenuItem><Link to='/portfolio'>Portfolio</Link></MenuItem>
                <MenuItem><Link to='/transactions'>Transactions</Link></MenuItem>
                <MenuItem onClick={() => handleLogOut()} >Logout</MenuItem>
            </Menu>
        </Dropdown>
    )
}

export default UserMenu