import React from 'react';
import Banner from '../Shared/Banner';
import Footer from '../Shared/Footer';
import Menu from './Menu';
import Breakfast from './Breakfast';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
            <Breakfast></Breakfast>
            <Footer></Footer>


        </div>
    );
};

export default Home;