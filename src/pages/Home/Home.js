import React from 'react';
import Footer from '../Shared/Footer';
import Breakfast from './Breakfast';
import Choose from './Choose';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Breakfast></Breakfast>
            <Choose></Choose>
            <Footer></Footer>


        </div>
    );
};

export default Home;