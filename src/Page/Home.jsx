import React from 'react';
import bannerbg from '../assets/bannerBg.jpg'
import { motion } from "framer-motion";
import { FaClock, FaHeart, FaRegCheckCircle, FaRocket } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import Habitcard from '../Components/Habitcard';
import Slider from '../Components/Slider';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div
                className=" mt-20"
               
            >
                <div className="w-full relative h-100 bg-cover bg-no-repeat  flex justify-center flex-col text-center"
                 style={{ backgroundImage: `url(${bannerbg})` }}
                >
                    <motion.h1
                        className="text-4xl font-bold text-blue-400"
                        initial={{ opacity: 0, y: -55 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Build Better Habits, With Us!
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-gray-500 flex flex-col text-lg "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        Stay consistent, track your progress, and achieve your <br /> goals effortlessly.
                        Our habit tracker helps <br /> you turn small actions into lasting routines,
                        keeping you motivated every step of the way.
                        <Link to='/register' className="btn w-40 mx-auto mt-5
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7 ">Get started</Link>
                    </motion.p>
                </div>
            </div>
            {/* Why Build Habits? */}
            <div className="container mx-auto ">
                <h1 className='text-3xl text-center font-bold mt-10'>Why Build Habits?</h1>
                <p className='text-center mt-2 text-gray-900'>Small daily habits lead to big results. Here's why building habits matters:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mt-2 gap-2">
                    <div className="card w-80 mx-auto bg-base-100 my-auto  shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="card-body ">
                            <h2 className="card-title"><FaRegCheckCircle size={25} color='green' /> Consistency</h2>
                            <p>Stay on track and make progress every day by tracking small actions.</p>
                        </div>
                    </div>
                    <div className="card w-80 mx-auto bg-base-100 my-auto  shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="card-body">
                            <h2 className="card-title"><FaRocket color='blue' size={25}/> Motivation</h2>
                            <p>Visualize your progress to stay motivated and never lose focus.</p>
                        </div>
                    </div>
                    <div className="card w-80 mx-auto bg-base-100 my-auto  shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="card-body">
                            <h2 className="card-title"><FaHeart  color='red' size={25}/> Wellbeing</h2>
                            <p>Healthy habits improve your mind and body over time.</p>
                        </div>
                    </div>
                    <div className="card w-80 mx-auto bg-base-100 my-auto  shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="card-body">
                            <h2 className="card-title"><FaClock color='blue' size={25}/> Productivity</h2>
                            <p>Turn small daily actions into big achievements efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
              
              <div className="Container mx-auto">
                <h1 className='text-center text-3xl font-bold mt-5 '>Featured Habits</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-10 px-30">
                    {
                        data.map(habit => <Habitcard habit={habit}></Habitcard>)
                    }
                </div>
               </div>
               <h1 className='text-center text-3xl font-bold mt-10'>Our Packages</h1>
              <div>
                <Slider/>
              </div>
        </div>
    );
};

export default Home;