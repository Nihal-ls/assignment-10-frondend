import React from 'react';

const Habitcard = ({ habit }) => {
    const {animated_image,habit_name,creator_name,status}= habit
    return (
        <div>
            <div className="card pt-10 px-5 bg-base-100 lg:h-70 card-md shadow-sm overflow-hidden m-5  hover:scale-105 transition ease-in-out hover:shadow-xl">
               <div className="flex flex-col items-center lg:flex-row  ">
                <div className=" ">
                <img className='w-[300px] mx-auto mt-2 rounded-lg mr-4' src={animated_image} alt="" />
               </div >
                <div className="card-body ">
                    <h2 className="card-title text-xl">{habit_name}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    {status === "public" && <p><span className='font-semibold'>Creator:</span> {creator_name}</p>}
                    <div className="justify-end card-actions">
                        <button className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7 mt-2">View Details</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Habitcard;