import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [click, setClick] = useState(false)
    let index = 1;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-4'>
            <h2 className='text-primary text-2xl font-semibold'>Our Happy Client</h2>
            <hr className='w-16 border border-secondary bg-secondary mx-auto my-2 hover:w-full ' />
            <div className="carousel w-full">
                {
                    reviews.map((review, index) => <Review
                        key={review._id}
                        review={review}
                        index={index}

                    ></Review>)
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    reviews.map((review, index) => <a href={`#item${index + 1}`} className="radio bg-primary border-0 text-white font-semibold "
                        key={review._id} checked >{index + 1}

                    </a>
                    )
                }

            </div>

        </div>
    );
};

export default Reviews;