import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomMeals = () => {
  const [meals, setMeals] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

      setMeals(response.data.meals[0]);
      console.log(response.data.meals[0]);
    })();
  }, []);

  if (!meals) return null;

  const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strSource } = meals;

  return (
    <section className="container">
      <div className="header">
        <h2>Featured Meal</h2>
        <input className="search" type="text" placeholder="Search..."/>
      </div>
      <div className="meal">
        <div className="meal-img">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="meal-details">
          <h1 className="meal-title">{strMeal}</h1>
          <p className="meal-instruction">{`${strInstructions.substring(0, 200)}...`}</p>
          <ul className="meal-info">
            <li>
              Category: <span>{strCategory}</span>
            </li>
            <li>
              Area: <span>{strArea}</span>
            </li>
          </ul>
          <a href={strSource}>View Recipe &#8594;</a>
        </div>
      </div>
    </section>
  );
};

export default RandomMeals;
