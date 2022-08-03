import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutBtn = () => {
    const navigate = useNavigate();
    const navigateToMenuItemPage = () => {
        navigate('/menuItem')
    }
    return (
        <button onClick={navigateToMenuItemPage} className="btn btn-active btn-ghost text-white">Checkout Your food</button>
    );
};

export default CheckoutBtn;