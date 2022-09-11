import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    iconStyle: 'solid',
                    display: 'flex',
                    flexDirection: 'column',

                    style: {
                        base: {
                            iconColor: 'green',
                            color: 'green',
                            fontSize: '16px',

                        },
                        invalid: {
                            iconColor: 'red',
                            color: 'red',
                        },

                    },
                }}

            />
            <button className='btn btn-primary btn-sm text-white btn-block mt-8' type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};
export default CheckoutForm;