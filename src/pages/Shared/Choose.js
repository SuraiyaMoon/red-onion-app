import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTruckFront, faTruck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import reasonImg1 from '../../images/adult-blur-blurred-background-687824.png';
import reasonImg2 from '../../images/architecture-building-city-2047397.png';
import reasonImg3 from '../../images/chef-cook-food-33614.png';
import Reason from './Reason';

const Choose = () => {
    const chosenReasons = [
        { id: 1, img: reasonImg1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt debitis id! Nam vero, ipsum odit beatae alias recusandae repellat?', tittle: 'Fast Delivery' },
        { id: 2, img: reasonImg3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt debitis id! Nam vero, ipsum odit beatae alias recusandae repellat?', tittle: 'A Good Auto Responder' },
        { id: 3, img: reasonImg2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt debitis id! Nam vero, ipsum odit beatae alias recusandae repellat?', tittle: 'Home Delivery' }
    ]
    return (
        <div className='my-12'>
            <div className='text-start mx-12 mb-8'>
                <h2 className=' text-xl font-semibold'>Why you Choose us</h2>
                <p className=''>Barton waited twenty always repair in within we do.An delighted offending curiosity <br /> my is dashwoods at. Boy prosperous increasing surrounded</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 mx-6 '>
                <Reason
                    img={reasonImg1}
                    description='Keep your system in sync with automated web hook based notifications each time link paid and how we dream about our future'
                    tittle='Fast Delivery'
                    icon={faTruckFront}
                ></Reason>
                <Reason
                    img={reasonImg3}
                    description='Keep your system in sync with automated web hook based notifications each time link paid and how we dream about our future'
                    tittle='A Good Auto Responder'
                    icon={faBell}
                ></Reason>
                <Reason
                    img={reasonImg2}
                    description='Keep your system in sync with automated web hook based notifications each time link paid and how we dream about our future'
                    tittle='Home Delivery'
                    icon={faTruck}
                ></Reason>
            </div>
        </div>
    );
};

export default Choose;