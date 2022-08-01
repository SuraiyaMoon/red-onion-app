import React from 'react';
import banner from '../../images/404backGround.jpeg';
import { Link } from 'react-router-dom';

const NotMatch = () => {
    return (
        <div className='min-h-screen flex  items-center ' style={{

            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

        }}>
            <div className='px-20'>
                <h2 className='text-9xl font-semibold text-red-700  '>404</h2>
                <p className='text-6xl'>Page not Found</p>
                <p className='my-3'><small className='text-xl'>The page you are looking for Was not found</small></p>
                <Link className='btn btn-primary' to="/home">Return To Home</Link>
            </div>

        </div>
    );
};

export default NotMatch;