import React from 'react';
import AdminLogo from '/AdminLogo.svg';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    
  return (
    <header className="flex justify-between items-center px-4 lg:px-8 py-3 bg-[linear-gradient(to_right,#1a1818,rgba(38,38,38,0.2))]">
        <div className='h-13'>
          <Link to='/'>
            <img src={AdminLogo} alt='Company Logo' className='h-full w-full object-fill'/>
            </Link>
        </div>
        {/* <MetalRate/> */}
        <Navbar />
        
    </header>
  )
}

export default Header