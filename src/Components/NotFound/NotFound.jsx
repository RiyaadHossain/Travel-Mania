import React from 'react';
import ErrorGif from '../../Assets/Image/pikabu.gif'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-[70vh] bg-[#f6f6f4]'>
            <div><img src={ErrorGif} alt="" /></div>
        </div>
    );
};

export default NotFound;