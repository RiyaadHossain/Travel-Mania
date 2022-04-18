import React from 'react';
import Success from '../../Assets/Image/2dce85df72ed99399fc68d9bec519ce0.gif'

const SuccessMsg = () => {
    return (
        <div className='h-[69.3vh]  flex justify-center items-center'>
            <div>
                <img className='max-h-[500px]'  src={Success} alt="" />
            </div>
        </div>
    );
};

export default SuccessMsg;