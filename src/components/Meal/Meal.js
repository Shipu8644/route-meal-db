import React from 'react';
import { NavLink } from 'react-router-dom';

const Meal = (props) => {
    console.log(props);
    const { idMeal, strMeal, strArea, strInstructions, strMealThumb } = props.meal;
    const ins = strInstructions.slice(0, 200);
    return (
        <div className='class="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-purple-200' >
            <img className='p-16 pb-1 h-96 ' src={strMealThumb} alt="" />
            <div className='px-6 py-4 text-center'>
                <h1>{idMeal}</h1>
                <h2>{strMeal}</h2>
                {/* <h2>{strArea}</h2>
                <p>{ins}...</p> */}

                <br />

                <NavLink className='p-2 border-2 bg-purple-400 font-semibold text-2xl rounded-lg' to='/meal'>Details</NavLink>
            </div>

        </div>

    );
};

export default Meal;