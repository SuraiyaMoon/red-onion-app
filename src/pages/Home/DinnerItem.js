import React from 'react';
import { useNavigate } from 'react-router-dom';

const DinnerItem = ({ item }) => {
    const { _id, name, img, description, price } = item;
    const navigate = useNavigate();
    const navigateToShowDetail = id => {
        navigate(`/dinnerDetail/${id}`)
    }
    return (


        <div className="card w-96  mx-auto " onClick={() => navigateToShowDetail(_id)}>
            <div className="card-body">
                <figure>
                    <img style={
                        {
                            width: '100px'
                        }
                    } src={img} alt="" />
                </figure>
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>

            </div>
        </div>

    );
};

export default DinnerItem;