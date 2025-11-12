import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Habitcard from '../Components/Habitcard';
import Spinner from '../Components/Spinner';

const Allhabits = () => {
   const [loading, setLoading] = useState(true)
   const [data, setData] = useState([])
   const Data = useLoaderData()
   useEffect(() => {
      if (data) {
         setLoading(false)
         setData(Data)

      }
   }, [Data])


   const handleSearch = (e) => {
      e.preventDefault()
      const searchedtext = e.target.search.value

      fetch(`https://assignment-10-server-seven-nu.vercel.app/search?search=${searchedtext}`)
         .then(res => res.json())
         .then(data => {
            setData(data);
         })
   }


   const handleFilter = (e) => {
      e.preventDefault()
      const category = e.target.value

      if (category == 'Default') {
         fetch('https://assignment-10-server-seven-nu.vercel.app/habits')
            .then(res => res.json())
            .then(data => setData(data))
         return

      }

      fetch(`https://assignment-10-server-seven-nu.vercel.app/filter?filter=${category}`)
         .then(res => res.json()
            .then(data => {
               setData(data)

            })
         )

   }

   if (loading) {
      return <Spinner />
   }

   return (
      <div>
         <h1 className='text-3xl mt-5 font-bold text-center'>Discover Healthy Habits</h1>
         <form action="" onSubmit={handleSearch} className='flex justify-center gap-3 mt-5 '>
            <label className="input  rounded-full ">
               <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                     strokeLinejoin="round"
                     strokeLinecap="round"
                     strokeWidth="2.5"
                     fill="none"
                     stroke="currentColor"
                  >
                     <circle cx="11" cy="11" r="8"></circle>
                     <path d="m21 21-4.3-4.3"></path>
                  </g>
               </svg>
               <input
                  name='search'

                  type="search" required placeholder="Search" />
            </label>
            <button className='btn bg-gradient-to-r  from-sky-300 to-blue-400 px-6 text-white rounded-full'>Search</button>
         </form>
         <form onChange={handleFilter} className="container mx-auto">
            <select className='border-2 border-gray-300 px-4 w-40  py-2' id="">
               <option value="" disabled defaultChecked>Filter</option>
               <option value="Default">Default</option>
               <option value="Personal Development">Personal Development</option>
               <option value="Nutrition">Nutrition</option>
               <option value="Mental Health">Mental Health</option>
               <option value="Learning">Learning</option>
               <option value="Hobbies">Hobbies</option>
            </select>
         </form>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
            {data.map(habit => <Habitcard habit={habit} />)}
         </div>
      </div>
   );
};

export default Allhabits;