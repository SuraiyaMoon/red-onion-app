import React from 'react';
import banner from '../../images/bannerbackground.png';

const Banner = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }
        } className="hero min-h-screen ">
            <div className="hero-content text-center text-black">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Best Food Waiting For Your Belly</h1>

                    <div class="input-group">
                        <input type="text" placeholder="Search your Food" class="input w-full max-w-xs" />
                        <button class="btn btn-primary  text-xs">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;