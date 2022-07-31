import React from 'react';

const BreakfastItem = ({ item }) => {
    const { name, img, description, price } = item;
    return (


        <div className="card w-96  mx-auto ">
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
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default BreakfastItem;