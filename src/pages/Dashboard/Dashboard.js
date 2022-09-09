import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="dashboard-drawer" tabIndex="0" className="drawer-button lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8  bg-primary rounded" fill="none" viewBox="0 0 26 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div className="flex items-center space-x-3">

                    <div>
                        <h1 className='text-2xl m-3'>Welcome to your dashboard </h1>

                    </div>
                </div>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-red-50 text-primary">
                    <div className="avatar flex justify-center">
                        <div className="rounded-full w-16">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <h2 className=' font-semibold'>{user?.displayName}</h2>
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addReview'>Add review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;