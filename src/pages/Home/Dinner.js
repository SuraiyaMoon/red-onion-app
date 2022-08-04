import React from 'react';
import DinnerItem from './DinnerItem';
import CheckoutBtn from '../Shared/CheckoutBtn';
import Choose from '../Shared/Choose';
import Footer from '../Shared/Footer';
import useDinner from '../../Hooks/useDinner';

const Dinner = () => {
    const [dinner] = useDinner();

    return (
        <div>

            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
            {
                dinner.map(item => <DinnerItem
                    key={item._id}
                    item={item}
                ></DinnerItem>)
            }

            </div>
            <CheckoutBtn></CheckoutBtn>
            <Choose></Choose>
            <Footer></Footer>
        </div>
    );
};

export default Dinner;