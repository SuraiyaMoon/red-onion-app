import React from 'react';
import {
    NavLink, Outlet
} from 'react-router-dom';

const Menu = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#e51a4b' : 'black',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

    return (
        <div>
            <div className='flex justify-evenly my-12'>
                <NavLink style={navLinkStyles}
                    className={`text-xl font-semibold `} to="/">Breakfast</NavLink>
                <NavLink style={navLinkStyles} className='text-xl font-semibold' to="/menu/lunch">Lunch</NavLink>
                <NavLink style={navLinkStyles} className='text-xl font-semibold' to="/menu/dinner">Dinner</NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default Menu;