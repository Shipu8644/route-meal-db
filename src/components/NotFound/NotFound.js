import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const homePageHandle = () => {
        history.push('/home')
    }
    return (
        <div className='text-center mt-16'>
            <h1 className='text-6xl font-bold mb-4'>Oops!!!</h1>
            <h2 className=' text-3xl text-red-500'> 404 page not found</h2>
            <button onClick={homePageHandle} className='bg-blue-400 border-2 rounded-lg text-xl p-2 mt-4'>Go to homepage</button>
        </div>
    );
};

export default NotFound;