import React from 'react';
import DinnerItem from './DinnerItem';
import dinnerPhoto1 from '../../images/dinner/dinner1.png';
import dinnerPhoto2 from '../../images/dinner/dinner2.png';
import dinnerPhoto3 from '../../images/dinner/dinner3.png';
import dinnerPhoto4 from '../../images/dinner/dinner4.png';
import dinnerPhoto5 from '../../images/dinner/dinner5.png';
import dinnerPhoto6 from '../../images/dinner/dinner6.png';

const Dinner = () => {
    const dinner = [
        { id: 1, name: 'Bagel and cream cheese', description: 'How we dream about our Future', price: 6.99, img: dinnerPhoto1 },
        { id: 2, name: 'Dinner Sandwich', description: 'How we dream about our Future', price: 9.99, img: dinnerPhoto2 },
        { id: 3, name: 'Backed Chicken', description: 'How we dream about our Future', price: 10.99, img: dinnerPhoto3 },
        { id: 4, name: 'Eggs Benedict', description: 'How we dream about our Future', price: 8.99, img: dinnerPhoto4 },
        { id: 5, name: 'Toast Croissant Fried egg', description: 'How we dream about our Future', price: 19.99, img: dinnerPhoto5 },
        { id: 6, name: 'Full Dinner Fried Toast Brunch', description: 'How we dream about our Future', price: 3.99, img: dinnerPhoto6 }
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
            {
                dinner.map(item => <DinnerItem
                    key={item.id}
                    item={item}
                ></DinnerItem>)
            }

        </div>
    );
};

export default Dinner;