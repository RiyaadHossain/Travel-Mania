import React from 'react';

const UserDetails = ({ user }) => {
    const { name, review, profession, img} = user
    return (
        <div className='border rounded-lg shadow-md testimonial-card text-white'>
            <p className='p-5 text-xl font-thin text-zinc-300'>{review}</p>
            <div className='flex items-center px-5 pb-5'>
                <img className='w-16 border-2 border-red-300 h-16 rounded-full object-cover' src={img} alt="" />
                <div className='ml-3'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-base text-slate-300'>{profession}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;