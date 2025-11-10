import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Habitcard from '../Components/Habitcard';

const Myhabits = () => {
    const data = useLoaderData()
    const {user} = use(AuthContext)
   const email = user.email
   const habit = data.find(habit => habit.user_email == email)
   console.log(habit); 
    console.log(data);
     return (
        <div>
            {
                <Habitcard habit={habit}></Habitcard>
            }
        </div>
    );
};

export default Myhabits;