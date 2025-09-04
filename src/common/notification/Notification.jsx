import React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { GrNotification } from 'react-icons/gr';

function Notification() {
  return (
    <Dropdown>
      <MenuButton>
        <GrNotification fontSize={24} color='#083863'  />
      </MenuButton>
      <Menu>
        <MenuItem>Notification1</MenuItem>
        <MenuItem>Notification2</MenuItem>
        <MenuItem >Notification3</MenuItem>
      </Menu>
    </Dropdown>
  )
}

export default Notification