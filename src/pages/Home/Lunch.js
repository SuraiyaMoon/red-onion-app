import React from 'react';
import useLunch from '../../Hooks/useLunch';
import lunchPhoto1 from '../../images/lunch/lunch1.png'
import lunchPhoto2 from '../../images/lunch/lunch2.png'
import lunchPhoto3 from '../../images/lunch/lunch3.png'
import lunchPhoto4 from '../../images/lunch/lunch4.png'
import lunchPhoto5 from '../../images/lunch/lunch5.png'
import lunchPhoto6 from '../../images/lunch/lunch6.png'
import Banner from '../Shared/Banner';
import CheckoutBtn from '../Shared/CheckoutBtn';
import Choose from '../Shared/Choose';
import Footer from '../Shared/Footer';
import LunchItem from './LunchItem';

const Lunch = () => {
    const [lunch, setLunch] = useLunch();
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