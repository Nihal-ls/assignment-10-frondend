import React from 'react';
import { Link } from 'react-router';

const Habitcard = ({ habit }) => {
    const { animated_image, habit_name, creator_name, status, description, _id, category } = habit
    const shortText = description.split(" ").slice(0, 10).join(" ") + "...";
    return (
        <div className='flex justify-center '>
            <div className=" pt-10  w-80 lg:w-100 mx-auto md:px-5  bg-base-100 lg:h-100 card-md shadow-sm  
                  overflow-hidden 
            hover:scale-105 transition ease-in-out hover:shadow-xl">
                <div className="flex flex-col sm:px-20 md:px-10 items-center lg:flex-row  ">
                    <div className="">
                        <img className='w-[300px] mx-auto mt-2 rounded-lg mr-4' src={animated_image} alt="" />
                    </div >
                    <div className="card-body ">
                        <h2 className="card-title text-xl">{habit_name}</h2>
                        <p>{shortText}</p>
                        <p className='bg-gray-100 rounded-2xl w-20 text-center'>{category}</p>
                        {status === "public" && <p><span className='font-semibold'>Creator:</span> {creator_name}</p>}
                        <div className="justify-end card-actions">
                            <Link
                                to={`/view-details/${_id}`}
                                className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-8 ">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habitcard;