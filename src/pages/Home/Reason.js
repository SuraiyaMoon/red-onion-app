import React from 'react';
import { Link } from 'react-router-dom';

const Reason = ({ reason }) => {
    const { img, description, tittle } = reason;

    return (
        <div className="card max-w-md bf-base-100 shadow-xl  mx-auto ">
            <div className="card-body">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <h2 className="text-xl font-semibold text-center">{tittle}</h2>
                <p>{description}</p>
                <Link className='text-green-400' style={{ textDecoration: "underline" }} to='/more'>See more</Link>
            </div>
        </div>
    );
};

export default Reason;