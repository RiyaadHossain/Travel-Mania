import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nabvar.css'

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center h-16'>
            <div>
                <h1 className='text-2xl font-bold'>Logo</h1>
            </div>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/about'>About</NavLink>
                <NavLink className='button' to='/login'>Log In</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;