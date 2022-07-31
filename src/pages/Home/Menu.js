import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className='flex justify-evenly my-12'>
                <Link
                    className='text-xl font-semibold' to="/">Breakfast</Link>
                <Link className='text-xl font-semibold' to="/menu/lunch">Lunch</Link>
                <Link className='text-xl font-semibold' to="/menu/dinner">Dinner</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Menu;