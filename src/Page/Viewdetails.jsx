import { useLoaderData, useParams } from 'react-router';

const Viewdetails = () => {
    const { id } = useParams()
    console.log(id);
    const data = useLoaderData()
    const clickedhabit = data.find(habit => habit._id == id)
    console.log(clickedhabit);
    const { habit_name, description, _id, user_email, animated_image, category, creator_name, status } = clickedhabit

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
                        <button  className="btn  text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  px-7  mt-5">
                            <input type="checkbox" />
                            Mark As Complete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewdetails;