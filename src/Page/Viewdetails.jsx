import { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Viewdetails = () => {
    const { id } = useParams()
    console.log(id);
    const { user } = use(AuthContext)
    const data = useLoaderData()
    const clickedhabit = data.find(habit => habit._id == id)
    console.log(clickedhabit);
    const { habit_name, description, _id, user_email, animated_image, category, creator_name, status } = clickedhabit

    const [allHabits, setAllHabits] = useState([]);
    const [completedHabits, setCompletedHabits] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/habits?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllHabits(data));
    }, [user.email]);
    useEffect(() => {
        fetch(`http://localhost:3000/completedHabits?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCompletedHabits(data));
    }, [user.email]);
    const handleComplete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/completedHabits`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...clickedhabit,
                    Completed_by: user.email,
                    completed_at: new Date()
                })
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Completed!",
                    text: result.message || "You have successfully completed your habit, keep going!",
                    icon: "success",
                });

                const res = await fetch(`http://localhost:3000/completedHabits?email=${user.email}`);
                const updated = await res.json();
                setCompletedHabits(updated);

            } else {
                Swal.fire({
                    title: "Oops!",
                    text: result.message || "You already completed this habit today!",
                    icon: "warning",
                });
            }

        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "You already completed Today",
                icon: "error",
            });
            console.error(err);
        }
    };

    const total = allHabits.length;
    const completed = completedHabits.length;
    const progress = total > 0 ? (completed / total) * 100 : 0;

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'>Details</h1>
            <div className="rounded-lg hover:shadow-2xl flex my-20 py-10 justify-around flex-wrap items-center  container mx-auto lg:card-side bg-base-100 shadow-sm">
                <div className=''>
                    <img
                        className='w-60 h-60'
                        src={animated_image}
                        alt="habit" />
                </div>
                <div className="">
                    <h2 className="card-title text-2xl font-bold">Habit Name: {habit_name}</h2>
                    <p className='my-2 mt-3 text-md text-gray-500'>{description}</p>
                    <p className='my-2 bg-primary mt-5 text-white rounded-2xl py-2 w-30 text-center'>{category}</p>
                    {status === "public" ? <p><span className='font-semibold'>Creator:</span> {creator_name}</p> :
                        <p className='font-bold text-lg'>Creator: (Creator Information Is private)</p>
                    }
                    {status === "public" ? <p><span className='font-semibold mt-5'>Creator email:</span> {user_email}</p> :
                        <p className='font-bold text-lg mt-5'>Creator: (Creator Information Is private)</p>
                    }
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleComplete}
                            className="btn  text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7  mt-5">
                            Mark As Complete</button>
                    </div>
                </div>
            </div>
            {/* progees bar */}
            <div className="w-full max-w-md mx-auto my-6">
                <h2>Tour Progress: {Math.round(progress)}%</h2>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-green-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

        </div>
    );
};

export default Viewdetails;