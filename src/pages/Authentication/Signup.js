import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'


const Signup = () => {
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
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })}
                                type="text" placeholder="Enter your Name" className="input  w-full max-w-xs bg-base-200" />

                        </div>
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
                                type="email" placeholder="Enter your email address" className="input  w-full max-w-xs bg-base-200" />

                        </div>
                        <div class="form-control w-full max-w-xs">
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
                                type="password" placeholder="Enter your Password" className="input w-full max-w-xs bg-base-200" />


                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label className='label'>
                                {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.confirmPassword.message}</span>}
                                {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.confirmPassword?.message}</span>}
                            </label>
                            <input  {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Please confirm your password"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password Did not match'
                                }
                            })}
                                type="password" placeholder="Confirm your password" className="input  w-full max-w-xs bg-base-200" />


                        </div>
                        <input className='btn btn-primary text-white w-full max-w-xs mt-6' type="submit" value="Signup" />
                    </form>
                    <p className='text-red-600'><small>Already have an account? <Link style={{ textDecoration: 'underline' }} to="/login">Go to Login</Link></small></p>


                    <div class="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button className='btn btn-outline btn-primary'>Continue With google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;