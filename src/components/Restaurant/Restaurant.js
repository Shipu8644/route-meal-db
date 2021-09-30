import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchHandler = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-bold text-purple-500 mb-4'>MealDb Restaurant</h1>
            </div>
            <div className='text-center'>
                <input onChange={searchHandler} className='border-2 p-1 rounded-lg border-purple-800 text-2xl w-96 mb-16' placeholder='search here' type="text" />
            </div>
            <div className="grid grid-cols-3 gap-8 container mx-auto p-8">
                {meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}></Meal>)}
            </div>


        </div>
    );
};

export default Restaurant;