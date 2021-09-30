import React from 'react';
import { NavLink } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.meal;

    return (
        <div className='class="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-purple-200 flex flex-col items-center' >
            <img className=' p-2 w-4/5  h-64 ' src={strMealThumb} alt="" />
            <div className='px-6 py-4 text-center text-2xl'>
                <h1>{idMeal}</h1>
                <h2 className='font-semibold'>{strMeal}</h2>
                <br />

                <NavLink className='p-2 border-2 bg-purple-400 font-semibold text-2xl rounded-lg' to={`/meal/${idMeal}`}>Details</NavLink>
            </div>

        </div>

    );
};

export default Meal;