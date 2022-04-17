import React, { useEffect, useState } from 'react';
import UserDetails from '../../UserDetails/UserDetails';

const Testimonial = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('user.json')
        .then(res => res.json())
        .then(json => setUser(json))
    }, [])
    return (
        <div className='my-24 container mx-auto'>
            <h2 className='text-center font-semibold text-4xl mb-10'>Our <span className='text-red-600'>Reviews</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {user.map(user => <UserDetails key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Testimonial;