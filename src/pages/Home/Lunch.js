import React from 'react';
import lunchPhoto1 from '../../images/lunch/lunch1.png'
import lunchPhoto2 from '../../images/lunch/lunch2.png'
import lunchPhoto3 from '../../images/lunch/lunch3.png'
import lunchPhoto4 from '../../images/lunch/lunch4.png'
import lunchPhoto5 from '../../images/lunch/lunch5.png'
import lunchPhoto6 from '../../images/lunch/lunch6.png'
import LunchItem from './LunchItem';

const Lunch = () => {
    const lunch = [
        { id: 1, name: 'Healthy Meal Plan', description: 'How we dream about our Future', price: 6.99, img: lunchPhoto1 },
        { id: 2, name: 'Fried Chicken Bento', description: 'How we dream about our Future', price: 9.99, img: lunchPhoto2 },
        { id: 3, name: 'Tarragong-Rubbed-Salmon', description: 'How we dream about our Future', price: 6.99, img: lunchPhoto3 },
        { id: 4, name: 'Beef Steak', description: 'How we dream about our Future', price: 15.99, img: lunchPhoto4 },
        { id: 5, name: 'Honey-Soy-Glazed Salmon with Peppers', description: 'How we dream about our Future', price: 7.99, img: lunchPhoto5 },
        { id: 6, name: 'Indian Lunch', description: 'How we dream about our Future', price: 8.99, img: lunchPhoto6 }
    ]
    return (
        <div>

            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
                {
                    lunch.map(item => <LunchItem
                        key={item.id}
                        item={item}
                    ></LunchItem>)
                }
            </div>



        </div>
    );
};

export default Lunch;