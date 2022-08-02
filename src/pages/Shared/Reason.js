import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';

const Reason = ({ img, description, tittle, icon }) => {

    return (
        <div className="card  w-96 bf-base-100 shadow-xl  mx-auto ">
            <div className="card-body">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div className='flex items-center'>
                    <FontAwesomeIcon className='bg-red-500 p-2 rounded-full text-white' icon={icon}></FontAwesomeIcon>
                    <h2 className="text-xl font-semibold text-start mx-2">{tittle}</h2>

                </div>
                <p className='text-start'>{description}</p>
                <Link className='text-start flex items-center' to='/more'><span className='text-blue-500 font-semibold'>See more</span>
                    <FontAwesomeIcon className='bg-green-400 p-2 rounded-full mx-2 text-white' icon={faArrowRight}></FontAwesomeIcon>

                </Link>
            </div>
        </div>
    );
};

export default Reason;