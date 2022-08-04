import React from 'react';
import useBreakfast from '../../Hooks/useBreakfast';
import CheckoutBtn from '../Shared/CheckoutBtn';
import Choose from '../Shared/Choose';
import BreakfastItem from './BreakfastItem';


const Breakfast = () => {
    const [breakfasts] = useBreakfast();

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 '>
                {
                    breakfasts.map(breakfastItem => <BreakfastItem
                        key={breakfastItem._id}
                        item={breakfastItem}
                    ></BreakfastItem>)
                }



            </div>
            <CheckoutBtn></CheckoutBtn>
            <Choose></Choose>

        </div>
    );
};

export default Breakfast;