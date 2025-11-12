import React, { use } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const UpdateHabit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id);
    const data = useLoaderData()
    const clickedhabit = data.find(habit => habit._id == id)
    const { user } = use(AuthContext)
    console.log(clickedhabit);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            habit_name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            animated_image: e.target.photo.value,
            remind_time: e.target.time.value,

        }
        console.log(formData.category);
        fetch(`https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "habit Updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/myhabits')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 my-10  w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center pt-10 px-10">Update Your habit!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            {/* user Name */}
                            <label className="label">User Name</label>
                            <input name='username' readOnly type="text"
                                className="input"
                                defaultValue={user.displayName}
                                placeholder="Habit Name" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' readOnly type="email"
                                className="input"
                                defaultValue={user.email}
                                placeholder="Habit Name" />
                            {/* Habit Title */}
                            <label className="label">Habit Title</label>
                            <input name='name' type="text"
                                className="input"
                                defaultValue={clickedhabit.habit_name}
                                placeholder="Habit Name" />
                            {/* category */}
                            <select name="category" defaultValue={clickedhabit.category} className='border-1 w-80 border-gray-300 p-3 rounded-md' id="">
                                <option defaultChecked disabled value="">Category</option>
                                <option defaultChecked value="Morning">Morning</option>
                                <option defaultChecked value="Work">Work</option>
                                <option defaultChecked value="Fitness">Fitness</option>
                                <option defaultChecked value="Evening">Evening</option>
                                <option defaultChecked value="Study">Study</option>
                            </select>
                            {/* Habit Title */}
                            <label className="label">Habit Description</label>
                            <input name='description'
                                defaultValue={clickedhabit.description}
                                type="text"
                                className="input" placeholder="Habit Description" />

                            {/* reminder time */}
                            <label className='label'>Reminder Time:</label>
                            <input
                                name='time'
                                type="time"
                                defaultValue={clickedhabit.remind_time}
                                className="border border-gray-300 p-2 rounded w-80"
                            />
                            {/* Image */}
                            <label className="label">Image</label>
                            <input name='photo' type="url"
                                className="input"
                                defaultValue={clickedhabit.animated_image}
                                placeholder="Habit Image" />
                            <button className="btn btn-neutral mt-4">Add Habit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateHabit;