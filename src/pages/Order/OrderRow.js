import React from 'react';


const OrderRow = ({ order, index, deletingOrder }) => {
    const { foodName, quantity, status, img, _id } = order;



    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>
                    </div>
                </div>
            </td>
            <td>{quantity}</td>
            <td className='text-primary font-semibold'>{status}</td>
            <td ><button onClick={() => deletingOrder(_id)} className='btn btn-xs btn-secondary font-semibold'>Delete Order</button></td>
            <td ><button className='btn btn-xs btn-primary font-semibold'>Proceed Order</button></td>
        </tr>


    );
};

export default OrderRow;