import React from 'react';
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal bg-gradient-to-r  from-sky-300 to-blue-400 footer-center  text-primary-content p-10">
                <aside>
                    <img
                        className='w-20 h-20 rounded-full'
                        src={logo} alt="" />
                    <p className="font-bold">
                        Habit Tracker
                        <br />
                        A web app for users to create, track, and manage daily habits to build streaks and boost
                        productivity.
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;