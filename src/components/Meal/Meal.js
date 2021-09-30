import React from 'react';
import { NavLink } from 'react-router-dom';

const Meal = (props) => {
    console.log(props);
    const { idMeal, strMeal, strArea, strInstructions, strMealThumb } = props.meal;
    const ins = strInstructions.slice(0, 200);
    return (
        <div className='text-center'>
            <h1>{idMeal}</h1>
            <h2>{strMeal}</h2>
            <h2>{strArea}</h2>
            <p>{ins}...</p>
            <img src={strMealThumb} alt="" />
            <NavLink to='/meal'>Details</NavLink>
        </div>
    );
};

export default Meal;