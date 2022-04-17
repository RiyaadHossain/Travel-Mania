import React from 'react';

const Banner = () => {
    return (
        <div className='banner-container text-center h-[93vh] flex items-center text-white'>
            <div>
                <h1 className='text-6xl font-bold'>Life is short and the world is wide!</h1>
                <p className='text-xl my-7 font-thin text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi accusantium ipsa totam quis explicabo cum doloremque possimus cumque omnis.</p>
                <button className='bg-red-700 py-2 px-5 rounded text-lg text-white'>Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;