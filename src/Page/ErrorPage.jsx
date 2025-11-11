import React from 'react';
import errorImage from '../assets/images.png'
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <img className='w-100  ' src={errorImage} alt="" />
            <h1 className='text-3xl  font-bold mt-3'>Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;