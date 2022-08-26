import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const Order = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orderByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className=''>
            <div className='text-start mx-4'>
                <div className=' mt-3' >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-full w-16">
                                <img src={user.photoURL} />              </div>
                        </div>
                        <div>
                            <h1 className='text-2xl '>Hey <span className='text-primary font-semibold'>{user?.displayName}</span></h1>
                        </div>
                    </div>
                </div>
                <p className='text-xl mt-2 text-gray-600'>Checkout your order</p>
            </div>

            <div className='overflow-x-auto w-full my-3'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Food</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></OrderRow>)
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Order;