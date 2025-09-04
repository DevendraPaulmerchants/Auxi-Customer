import React from 'react'
import { TbUserCircle } from 'react-icons/tb';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

function UserMenu() {
    return (
        <Dropdown>
            <MenuButton>
                <TbUserCircle fontSize={28} color='#083863'  />
            </MenuButton>
            <Menu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </Dropdown>
    )
}

export default UserMenu