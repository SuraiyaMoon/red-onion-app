import React from 'react';

const Location = ({ location }) => {
    return (
        <div className='text-left'>
            <h2>From <span className='font-semibold'>Gulshan Plaza Restaurant </span></h2>
            <h2>Arriving in <span className='font-semibold'>Time</span> </h2>
            <h2>To {location}</h2>
        </div>
    );
};

export default Location;