import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div>
            <nav className='text-2xl m-4 bg-purple-100 font-serif'>
                <NavLink activeStyle={activeStyle} to='/home'>Home</NavLink>
                <NavLink activeStyle={activeStyle} className='m-16' to='/Restaurant'>Restaurant</NavLink>
                <NavLink activeStyle={activeStyle} to='/About'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;