import React from 'react';
import Footer from '../Shared/Footer';
import Breakfast from './Breakfast';
import Choose from '../Shared/Choose';
import Menu from './Menu';

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