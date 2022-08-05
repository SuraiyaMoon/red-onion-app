import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DetailMenu from './DetailMenu';

const ShowDetail = ({ detail }) => {
    const { _id, name, img, description, price } = detail;
    const [user] = useAuthState(auth)
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)

    }
    const handleDecrease = () => {
        if (quantity <= 1) {
            alert('You have at least order one item ')
        }
        else {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity)
        }
    }
    const handleOrder = () => {
        const order = {
            email: user?.email,
            userName: user?.displayName,
            foodName: name,
            img: img,
            quantity: quantity,
            total: price * quantity,
        }
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${user?.displayName} your order placed successfully`)
                }
                else {
                    toast.error('An error occur.Please check')
                }
            })
        console.log(order)
    }
    return (

        <div>
            <DetailMenu></DetailMenu>
            <div className="hero-content flex-col lg:flex-row-reverse justify-between px-20">


            <img src={img} className="max-w-sm rounded-lg " />
            <div className='lg:text-start '>
                <h1 className="lg:text-5xl font-bold text-3xl">{name}</h1>
                <p className="my-3">{description}</p>

                <div className=" flex items-center ">
                    <p className='text-4xl font-bold mx-2'>${price}</p>
                    <div class=" flex ">

                            <button onClick={handleDecrease} className='btn btn-outline border-r-0 rounded-lg rounded-r-none'><FontAwesomeIcon className='text-primary ' icon={faMinus}></FontAwesomeIcon></button>
                            <button className="btn w-3/4 btn-outline rounded-none border-x-0">{quantity}</button>
                            <button onClick={handleIncrease} className='btn btn-outline rounded-lg rounded-l-none border-l-0 '><FontAwesomeIcon className='text-primary' icon={faPlus}></FontAwesomeIcon></button>


                        </div>
                    </div>
                    <button onClick={() => handleOrder(_id)} class="btn btn-xs btn-primary">Add cart</button>

                </div>
            </div>
        </div>
    );
};

export default ShowDetail;