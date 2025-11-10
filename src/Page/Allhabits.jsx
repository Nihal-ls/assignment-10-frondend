import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Habitcard from '../Components/Habitcard';
import Spinner from '../Components/Spinner';

const Allhabits = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const Data = useLoaderData()
     useEffect(() => {
        if(data) {
            setLoading(false)
            setData(Data)

        }
     },[Data])

     if(loading){
        return <Spinner />
     }
   
    return (
        <div>
           <h1 className='text-3xl font-bold text-center'>Discover Healthy Habits</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
              {data.map(habit => <Habitcard habit={habit}/>)}
           </div>
        </div>
    );
};

export default Allhabits;