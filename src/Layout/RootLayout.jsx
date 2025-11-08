import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet/>
        </div>
    );
};

export default RootLayout;