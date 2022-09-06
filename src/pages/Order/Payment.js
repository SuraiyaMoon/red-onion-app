import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetail';

const Payment = () => {
    const { id } = useParams();
    const [food] = useItemDetails(id)
    return (
        <div>
            <h2>{food.total}{id}</h2>

        </div>
    );
};

export default Payment;