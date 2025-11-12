import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.jpg'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, signOutuser } = use(AuthContext)
    const Navlinks = <>
        <li className='text-lg'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg '><NavLink to='/all-habits'>Browse Public Habits</NavLink></li>
        <li className='text-lg '><NavLink to='/myhabits'>My Habits</NavLink></li>
        <li className='text-lg '><NavLink to='/addhabit'>Add Habit</NavLink></li>
    </>
    const handleSignout = () => {
        signOutuser()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You successfully Logged Out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <div className="navbar  bg-base-100 container mx-auto rounded-full py-3 px-6 mt-5 shadow-sm">
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
                        <a className="btn btn-ghost hidden md:inline-block md:text-xl  font-bold">
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
                    {
                        user ?
                            <div className="flex items-center gap-2">


                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className=" m-1">
                                            <img
                                                className='Border-2 rounded-full w-[40px] h-[40px] '
                                                src={user ? user?.photoURL : ''} alt="" />
                                        </div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-80  p-2 shadow-sm">
                                            <li className='text-lg font-bold my-3'>Name: {user ? user.displayName : ''}</li>
                                            <li className='text-md font-semibold mb-3'>Email: {user ? user.email : ''}</li>
                                            <li><button
                                                onClick={handleSignout}
                                                className='btn  px-7 hover:text-white hover:font-bold hover:bg-gradient-to-r  from-sky-300 to-blue-400  '>
                                                SignOUt</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="sm:space-x-0 md:space-x-2  flex">
                                <Link to='/login'>
                                    <button className="btn  px-7 hover:text-white hover:font-bold hover:bg-gradient-to-r  from-sky-300 to-blue-400   ">Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7 ">Signup</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;