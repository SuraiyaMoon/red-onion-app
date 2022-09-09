import React from 'react';
import Footer from '../Shared/Footer';
import Menu from './Menu';
import Breakfast from './Breakfast';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Breakfast></Breakfast>
            <Reviews></Reviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;