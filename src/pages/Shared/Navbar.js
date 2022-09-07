import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react"

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);






    useEffect(() => {
        if (user) {
            const email = user?.email;
            fetch(`http://localhost:5000/orderByEmail?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    setOrders(data)



                })
        }
    }, [user])
    const logOut = () => {
        signOut(auth)
        setOrders([])

    }

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>
        }
    </>
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start flex">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>



                </div>

                <a className="btn btn-ghost normal-case text-xl">
                    <Link to='/home'> <img style={
                        { width: '150px' }
                    } src={logo} alt="" /></Link>
                </a>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div class="indicator">
                    <Link to="/myOrder"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
                    <span class="badge badge-primary badge-xs indicator-item">{orders?.length}</span>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex items-center">
                        {
                            user ? <button className="btn btn-outline btn-xs btn-primary text-white mx-2" onClick={logOut}>Logout</button>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }
                        <button className="btn  btn-xs btn-primary text-white" ><Link to="/signup">Sign up</Link></button>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;