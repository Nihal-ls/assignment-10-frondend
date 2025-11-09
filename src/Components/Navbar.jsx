import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.jpg'
const Navbar = () => {

    const Navlinks = <>
        <li className='text-lg'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg '><NavLink to='/all-habits'>Browse Public Habits</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto rounded-full py-3 px-6 mt-5 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Navlinks}
                        </ul>
                    </div>
                    <div className="items-center flex">
                        <img className='w-[70px]' src={logoImg} alt="" />
                        <a className="btn btn-ghost text-xl font-bold">
                            Habit Tracker
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn  px-7 hover:text-white hover:font-bold hover:bg-gradient-to-r  from-sky-300 to-blue-400   ">Login</a>
                    <a className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7 ">Signup</a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;