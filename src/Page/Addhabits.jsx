import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Addhabits = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            creator_name: e.target.name.value,
            habit_name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            animated_image: e.target.photo.value,
            created_at: new Date(),
            remind_time: e.target.time.value,
            user_email: user.email

        }
        console.log(formData.category);
        fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits', {
            method: 'POST',
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
                    title: "Habit added successfully",
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
                <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center pt-10 px-10">Add Your habit!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input name='name' type="text"
                                readOnly
                                defaultValue={user.displayName}
                                className="input" placeholder="Name" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email"
                                readOnly
                                defaultValue={user.email}
                                className="input" placeholder="Email" />
                            {/* Habit Title */}
                            <label className="label">Habit Title</label>
                            <input name='habitTitle' type="text"
                                className="input" placeholder="Habit Name" />
                            {/* category */}
                            <select name="category" className='border-1 w-80 border-gray-300 p-3 rounded-md' id="">
                                <option defaultChecked disabled value="">Category</option>
                                <option defaultChecked value="Morning">Morning</option>
                                <option defaultChecked value="Work">Work</option>
                                <option defaultChecked value="Fitness">Fitness</option>
                                <option defaultChecked value="Evening">Evening</option>
                                <option defaultChecked value="Study">Study</option>
                            </select>
                            {/* Habit Title */}
                            <label className="label">Habit Description</label>
                            <input name='description' type="text"
                                className="input" placeholder="Habit Description" />

                            {/* reminder time */}
                            <label className='label'>Reminder Time:</label>
                            <input
                                name='time'
                                type="time"
                                className="border border-gray-300 p-2 rounded w-80"
                            />
                            {/* Image */}
                            <label className="label">Image</label>
                            <input name='photo' type="url"
                                className="input" placeholder="Habit Image" />
                            <button className="btn btn-neutral mt-4">Add Habit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addhabits;