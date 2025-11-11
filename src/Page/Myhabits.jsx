import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Myhabits = () => {



    const data = useLoaderData()
    const Navigate = useNavigate()
    const { user } = use(AuthContext)
    const email = user.email
    const habit = data.find(habit => habit.user_email == email)
    const [completedHabits, setCompletedHabits] = useState([]);

    console.log(habit);
    console.log(data);
    console.log(habit?._id);
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/habits/${habit?._id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"


                        });
                        Navigate('/myhabits')
                    })


            }
        })
    }

     useEffect(() => {
          fetch(`http://localhost:3000/habits?email=${user.email}`)
              .then(res => res.json())
              .then(data => console.log(data));
      }, [user.email]);
      useEffect(() => {
          fetch(`http://lhost:3000/completedHabits?email=${user.email}`)
              .then(res => res.json())
              .then(data => setCompletedHabits(data));
      }, [user.email]);
      

    const handleComplete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/completedHabits`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    habit_id: habit._id,
                    Completed_by: user.email,
                })
            });
            const result = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: "Completed!",
                    text: result.message,
                    icon: "success",
                });
                const res = await fetch(`http://localhost:3000/completedHabits?email=${user.email}`);
                const completedData = await res.json();
                setCompletedHabits(completedData);
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: result.message,
                    icon: "warning",
                });
            }
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
            });
            console.error(err);
        }
    };


    if (!habit) {
        return <div className='min-h-screen items-center text-center  mt-20'><h1 className='text-3xl font-bold'>You Dont Have Any habit addeded</h1>
            <Link to='/addhabit' className='btn font-bold  bg-gradient-to-r  from-sky-300 to-blue-400  px-7  mt-5 hover:scale-110 transition ease-in-out text-white rounded-md'>Add your Habit</Link>
        </div>
    }
    return (
        <div className=''>
            <div className="container py-5 flex justify-between px-10  mx-auto my-10 shadow-md rounded-md items-center hover:shadow-lg hover:scale-102 transition ease-in-out">
                <div className="">
                    <img src={habit?.animated_image}
                        className='w-30 h-30'
                        alt="" />
                </div>
                <div className="">
                    <h1 className='text-xl font-bold'>Habit Name:{habit?.habit_name}</h1>
                    <button
                        onClick={handleComplete}
                        className='btn bg-green-400 rounded-md px-7 mt-3 font-bold text-white'
                    >Mark Complete
                    </button>
                    <Link to={`/updatehabit/${habit._id}`} className='btn bg-primary rounded-md px-7 mt-3 text-white ml-3 font-semibold'>Update</Link>

                    <button onClick={handleDelete} className='btn bg-transparent rounded-md px-7 mt-3 text-red-500 border-red-500 hover:bg-red-500 hover:text-white ml-3'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Myhabits;