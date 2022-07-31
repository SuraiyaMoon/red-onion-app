import React from 'react';

const Reason = ({ reason }) => {
    const { img, description, tittle } = reason;

    return (
        <div className="card w-96  mx-auto ">
            <div className="card-body">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <h2 className="text-xl font-semibold text-center">{tittle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Reason;