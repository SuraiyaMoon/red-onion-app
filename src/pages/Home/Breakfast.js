import React from 'react';
import breakfast1 from '../../images/breakfast/breakfast1.png'
import breakfast2 from '../../images/breakfast/breakfast2.png'
import breakfast3 from '../../images/breakfast/breakfast3.png'
import breakfast4 from '../../images/breakfast/breakfast4.png'
import breakfast5 from '../../images/breakfast/breakfast5.png'
import breakfast6 from '../../images/breakfast/breakfast6.png'
import BreakfastItem from './BreakfastItem';


const Breakfast = () => {
    const breakfast = [
        { id: 1, name: 'Bagel and Cream cheese', description: 'How we dream about our Future', price: 6.99, img: breakfast1 },
        { id: 2, name: 'Eggs Benedict', description: 'How we dream about our Future', price: 9.99, img: breakfast2 },
        { id: 3, name: 'Breakfast Sandwich', description: 'How we dream about our Future', price: 6.99, img: breakfast3 },
        { id: 4, name: 'Beef Steak', description: 'How we dream about our Future', price: 15.99, img: breakfast4 },
        { id: 5, name: 'Honey-Soy-Glazed Salmon with Peppers', description: 'How we dream about our Future', price: 7.99, img: breakfast5 },
        { id: 6, name: 'Indian Lunch', description: 'How we dream about our Future', price: 8.99, img: breakfast6 }
    ]
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 '>
                {
                    breakfast.map(breakfastItem => <BreakfastItem
                        key={breakfastItem.id}
                        item={breakfastItem}
                    ></BreakfastItem>)
                }
            </div>



        </div>
    );
};

export default Breakfast;