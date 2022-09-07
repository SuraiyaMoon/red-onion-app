import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetails from '../../Hooks/useItemDetail';

const PaymentCart = ({ id }) => {
    const [food] = useItemDetails(id);
    const navigate = useNavigate();
    const navigateToPaymentPage = (id) => {
        navigate(`/payment/${id}`);
        toast('Please pay for your order')
    }
    const total = food.total;
    const tax = 0.05 * total;
    const DeliveryFee = 2;
    const totalAmount = total + tax + DeliveryFee;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Payment details</h2>
                <div className='flex items-center justify-around bg-gray-100 p-2 rounded '>
                    <img className='w-24' src={food.img} alt="" />
                    <div className='text-start'>
                        <h2 className='font-semibold'>{food.foodName}</h2>
                        <h2 className='text-red-600 font-semibold'>${food.total}</h2>
                    </div>
                    <h2 className='font-semibold'>{food.quantity} Piece</h2>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='text-start'>
                        <h2>Sub Total </h2>
                        <h2>Tax</h2>
                        <h2>Delivery fee </h2>
                        <h2>Total</h2>
                    </div>
                    <div className='text-start'>
                        <h2>:</h2>
                        <h2>:</h2>
                        <h2>:</h2>
                        <h2>:</h2>
                    </div>
                    <div className='text-start'>
                        <h2>${total}</h2>
                        <h2>${tax}</h2>
                        <h2>$ {DeliveryFee}</h2>

                        <h2>${totalAmount}</h2>
                    </div>
                </div>
                <button onClick={() => navigateToPaymentPage(id)} className='btn btn-primary'>Place Order</button>

            </div>
        </div>
    );
};

export default PaymentCart;