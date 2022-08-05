import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreakfastItem = ({ item }) => {
    const { _id, name, img, description, price } = item;
    const navigate = useNavigate();
    const navigateToShowDetail = id => {
        navigate(`/breakfastDetail/${id}`)
    }


    return (


        <div className="card w-96 mx-auto" onClick={() => navigateToShowDetail(_id)}>
            <div className="card-body">
                <figure>
                    <img style={
                        {
                            width: '100px'
                        }
                    } src={img} alt="" />
                </figure>
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <div>
                    <p>{description.substring(0, 100)}...
                    </p>

                </div>
                <p className='text-xl font-semibold'>Price: ${price}</p>

            </div>
        </div>

    );
};

export default BreakfastItem;