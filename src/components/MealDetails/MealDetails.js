import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const { mealId } = useParams();

    const [meal, setMeal] = useState({});

    const history = useHistory();

    const handleAllItems = () => {
        history.push('/restaurant');
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealId])
    const { strMealThumb, strCategory, strArea, strMeal, strInstructions, strTags } = meal;
    // let ins = strInstructions.substring(0, 300);
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl font-bold font-mono'>Here is the detail below:</h1>
            </div>

            <div className="flex items-center p-4 bg-white border-2 
            border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 w-2/3 ml-48 mt-4 ">
                <img alt="mountain" className="w-1/3  rounded-md border-2 border-gray-300 shadow-2xl" src={strMealThumb} />
                <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">{strMeal}, {strCategory}, {strArea} [{strTags}] </h4>
                    <h4 className='text-xl font-semibold'>Recipe:</h4>
                    <p id="job" className="text-gray-800 mt-2">
                        {strInstructions}</p>
                    <div className="flex mt-3">
                        <button onClick={handleAllItems} className='bg-purple-400 border-2 rounded-lg text-xl p-2 pl-3 mt-4'>All items</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;