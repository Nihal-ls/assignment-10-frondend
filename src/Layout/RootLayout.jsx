import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet/>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;