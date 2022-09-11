import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import bannerBackground from '../../images/bannerbackground.png';
import PaymentCart from './PaymentCart';

import { useParams } from 'react-router-dom';


const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    // console.log(id)
    const [clicked, setClicked] = useState(false);
    const onSubmit = async data => {
        setClicked(true)
        fetch(`http://localhost:5000/order/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        console.log(data, 'data')
    }



    return (
        <div style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }} className='flex lg:flex-row items-center flex-col justify-around min-h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl my-4 ">
                <div className="card-body">

                    {/* <div className='flex justify-center '>
                        <img style={{ width: '130px' }} src={logo} alt="" />
                    </div> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.deliveryType?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.deliveryType.message}</span>}

                            </label>
                            <input value="Delivery To Door" {...register("deliveryType", {
                                required: {
                                    value: true,

                                }
                            })}
                                type="text" className="input  w-full max-w-xs bg-base-200" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.location.message}</span>}

                            </label>
                            <input {...register("location", {
                                required: {
                                    value: true,
                                    message: "location is required"
                                }
                            })}
                                type="text" placeholder="Enter your address" className="input  w-full max-w-xs bg-base-200" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.homeName?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.homeName.message}</span>}

                            </label>
                            <input {...register("houseName", {
                                required: {
                                    value: true,
                                    message: "Please write your House Name"
                                }
                            })}
                                type="text" placeholder="Enter your House Name" className="input  w-full max-w-xs bg-base-200" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.Flat?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.Flat.message}</span>}

                            </label>
                            <input  {...register("Flat", {
                                required: {
                                    value: true,
                                    message: "Flat Number is Required"
                                }
                            })}
                                type="number" placeholder="Flat,suit or floor" className="input w-full max-w-xs bg-base-200" />


                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.instruction?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.instruction.message}</span>}

                            </label>
                            <input  {...register("instruction", {
                                required: {
                                    value: true,
                                    message: "Please add instruction"
                                }
                            })}
                                type="text" placeholder="Add Delivery instruction" className="input  w-full max-w-xs bg-base-200" />


                        </div>

                        <input className={`btn  w-full max-w-xs mt-6 font-light ${clicked ? 'btn-disabled' : 'btn-primary'}`} type="submit" value="Save and Continue" />
                    </form>

                </div>


            </div>
            {
                clicked ? <PaymentCart id={id}></PaymentCart> : <p>Please fill the form</p>
            }
        </div>
    );
};

export default PlaceOrder;