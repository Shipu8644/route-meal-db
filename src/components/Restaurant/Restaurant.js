import React, { useEffect, useState, createContext } from 'react';
import Meal from '../Meal/Meal';

export const ApiContext = createContext('api');

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

    const logo = 'https://www.themealdb.com/images/logo-small.png';

    return (
        <ApiContext.Provider value={logo}>
            <div>
                <div>
                    <h1 className='text-3xl text-center font-bold text-purple-500 mb-4'>MealDb Restaurant</h1>
                </div>
                <div className='text-center'>
                    <input onChange={searchHandler} className='border-2 p-1 rounded-lg border-purple-800 text-2xl w-96 mb-16' placeholder='search here' type="text" />
                </div>



                <div className="grid grid-cols-4 gap-8 container mx-auto p-8">
                    {
                        meals ? meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}></Meal>)
                            :
                            <h1 className='text-2xl text-center text-red-600 font-bold  grid grid-cols-none'>Sorry This typeof food  is not Available
                            </h1>
                    }
                </div>


            </div>
        </ApiContext.Provider>

    );
};

export default Restaurant;