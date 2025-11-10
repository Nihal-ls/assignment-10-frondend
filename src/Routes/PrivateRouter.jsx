import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user,loading} = use(AuthContext)
    if(loading){
        return <Spinner/>
    }
    if(!user){
        return <Navigate to='/register'></Navigate>
    }
    return children
};

export default PrivateRouter;