import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetail';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';




const stripePromise = loadStripe('pk_test_51LLgWFKvV1yc3oCUWlQFmaMWW1G2JeY1yFcrKPCCPpt0krNXMLFg75ydAM8oMuM7VlWB2xbwDgTSEilCC4BAcBLw005IkmPGrY');
const Payment = () => {
    const { id } = useParams();
    const [food] = useItemDetails(id)

    return (
        <div className='card w-96 shadow p-8 mx-auto h-36 mt-8 '>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>

        </div>
    );
};

export default Payment;