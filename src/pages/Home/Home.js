import React from 'react';
import Footer from '../Shared/Footer';
import Menu from './Menu';
import Breakfast from './Breakfast';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Breakfast></Breakfast>
            <Footer></Footer>


        </div>
    );
};

export default Home;