import React from 'react';
import useLunch from '../../Hooks/useLunch';
import CheckoutBtn from '../Shared/CheckoutBtn';
import Choose from '../Shared/Choose';
import Footer from '../Shared/Footer';
import LunchItem from './LunchItem';

const Lunch = () => {
    const [lunch] = useLunch();
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
                {
                    lunch.map(item => <LunchItem
                        key={item._id}
                        item={item}
                    ></LunchItem>)
                }
            </div>
            <CheckoutBtn></CheckoutBtn>
            <Choose></Choose>
            <Footer></Footer>
        </div>
    );
};

export default Lunch;