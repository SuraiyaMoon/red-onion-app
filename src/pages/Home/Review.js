import { faRotate, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import quote from '../../images/icons/quote.svg';

const Review = ({ review, index }) => {
    const { name, clientReview, img, rating } = review;
    let ratingStar = <div>
        <p>No ratings</p>
    </div>
    if (rating == 1) {
        ratingStar = <div>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (rating == 2) {
        ratingStar = <div className='flex items-center justify-center'>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (rating == 3) {
        ratingStar = <div className='flex items-center justify-center'>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (rating == 4) {
        ratingStar = <div className='flex items-center justify-center'>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-base-200' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (rating == 5) {
        ratingStar = <div className='flex items-center justify-center'>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
        </div>

    }
    else {

    }
    return (
        <div id={`item${index + 1}`} className="carousel-item card w-full bg-base-100  mx-auto">

            <div className=''>
                <img className='w-8 mx-12' src={quote} alt="" />
                <p className='mx-12'>{clientReview}</p>
                <div className='float float-right'>
                    <img
                        className='w-8 mx-12 rotate-180 ' src={quote} alt="" />
                </div>
            </div>
            <div className="avatar mx-auto my-2 ">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3 ">
                    <img src={img} />
                </div>
            </div>
            <h2 className='my-2'>{name}</h2>
            {ratingStar}

        </div>




    );
};

export default Review;