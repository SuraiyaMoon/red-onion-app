import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)

    };

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-3 justify-center w-3/4'>
                <h2 className='font-semibold text-xl'>Add review</h2>
                <input {...register("name")}
                    type="text" value={user?.displayName} className="input input-bordered input-secondary w-full  my-3 font-semibold" />
                <select  {...register("rating", {
                    required: {
                        value: true,
                        message: "Please Give Your Rating"
                    }
                })}
                    className="select select-secondary w-full">
                    <option disabled selected>Give your ratings</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <div class="my-3">
                    <div class="rounded-lg shadow-xl bg-gray-50">
                        <div class="p-4">
                            <div class="flex items-center justify-center w-full">
                                <label class="flex flex-col w-full h-32">
                                    <div class="flex flex-col items-center justify-center pt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                            fill="red">
                                            <path fill-rule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <p class="pt-1 text-sm text-gray-400">
                                            Upload your photo</p>
                                    </div>
                                    <input {...register("img", {
                                        required: {
                                            value: true,
                                            message: "Image is required"
                                        }
                                    })} type="file" className="opacity-0" />
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <textarea {...register("clientReview", {
                    required: {
                        value: true,
                        message: "Review is required"
                    }
                })}
                    id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border my-3 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Share your thoughts..."></textarea>
                <input className='input btn btn-primary w-full font-semibold' type="submit" value="Add review" />
            </form>


        </div>
    );
};

export default AddReview;