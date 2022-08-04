import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShowDetail = ({ detail }) => {
    const { name, img, description, price } = detail;
    return (

        <div className="hero-content flex-col lg:flex-row-reverse justify-between px-12">
            <img src={img} className="max-w-sm rounded-lg " />
            <div className='lg:text-start '>
                <h1 className="lg:text-5xl font-bold text-3xl">{name}</h1>
                <p className="my-3">{description}</p>

                <div className=" flex items-center ">
                    <p className='text-4xl font-bold mx-2'>${price}</p>
                    <div class=" flex ">

                        <button className='btn btn-outline border-r-0 rounded-lg rounded-r-none'><FontAwesomeIcon className='text-primary ' icon={faMinus}></FontAwesomeIcon></button>
                        <button className="btn w-3/4 btn-outline rounded-none border-x-0">1</button>
                        <button className='btn btn-outline rounded-lg rounded-l-none border-l-0 '><FontAwesomeIcon className='text-primary' icon={faPlus}></FontAwesomeIcon></button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;