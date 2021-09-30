import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealId } = useParams();
    console.log(mealId);

    const { meal, setMeal } = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => console.log(data.meals[0]))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl font-bold font-mono'>Here is the detail below:</h1>
            </div>

            <div class="flex items-center p-4 bg-white border-2 
            border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 w-2/3 ml-48 mt-4">
                <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                <div id="body" class="flex flex-col ml-5">
                    <h4 id="name" class="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p id="job" class="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div class="flex mt-5">
                        <img alt="avatar" class="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                        <p class="ml-3">John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;