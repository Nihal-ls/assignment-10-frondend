import { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaFire } from 'react-icons/fa';
import Myhabits from './Myhabits';

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
        fetch(`https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/habits?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllHabits(data));
    }, [user.email]);
    useEffect(() => {
        fetch(`http://lhost:3000/completedHabits?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCompletedHabits(data));
    }, [user.email]);
    const handleComplete = async () => {
        try {
            const response = await fetch(`https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/completedHabits`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    habit_id: clickedhabit._id,
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
                const res = await fetch(`https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/completedHabits?email=${user.email}`);
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

    const total = allHabits.length;
    const completed = completedHabits.length;
    const progress = total > 0 ? (completed / total) * 100 : 0;

    const getHabitStreak = (habitId) => {
        const habitRecords = completedHabits
            .filter(h => h.habit_id === habitId)
            .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at));

        return habitRecords.length > 0 ? habitRecords[0].streak : 0;
    };
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
            <p className="text-2xl  font-semibold text-center  mt-3">
                Streak For this Habit: <span className='text-red-500 font-bold text-xl flex justify-center items-center gap-2'><FaFire/> {getHabitStreak(clickedhabit._id)} day{getHabitStreak(clickedhabit._id) > 1 ? "s" : ""}</span>
            </p>
            <div className="w-full max-w-md mx-auto my-6">
                <h2>Tour Progress: {Math.round(progress)}%</h2>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-gradient-to-r  from-sky-300 to-blue-400 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                   
                </div>
            </div>

        </div>
    );
};

export default Viewdetails;