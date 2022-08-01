import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex items-center min-h-screen justify-center'>
            <div className="card  w-96 bg-base-100 shadow-xl ">
                <div className="card-body">

                    <div className='flex justify-center '>
                        <img style={{ width: '130px' }} src={logo} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                                type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div class="form-control w-full max-w-xs">
                            {/* <label className="label">
                            <span className="label-text">Email</span>
                        </label> */}
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                            </label>
                            <input  {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })}
                                type="password" placeholder="Enter your Password" className="input input-bordered w-full max-w-xs" />


                        </div>
                        <input className='btn btn-primary text-white w-full max-w-xs mt-6' type="submit" value="Login" />
                    </form>
                    <p className='text-green-800'><small>New to <span className=' font-semibold'>Red-</span><span className='font-semibold'>Onion</span> Foods? <Link style={{ textDecoration: 'underline' }} to="/signup">Go to signup</Link></small></p>


                    <div class="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button className='btn btn-outline btn-primary'>Continue With google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;