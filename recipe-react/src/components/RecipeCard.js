import './RecipeCard.css';
import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { image, url, label, healthLabels, ingredientLines, calories, totalWeight } = recipe.recipe;

  return (
    <section className="container">
      <div className="meal">
        <div className="meal-img">
          <img src={image} alt={label} />
        </div>
        <div className="meal-details">
          <h1 className="meal-title">{label}</h1>
          {/* <p className="meal-instruction">{`${ingredientLines}.substring(0,150)...`}</p> */}
          <ol className="meal-instruction">
            {ingredientLines.map(ingredient =>
              <li key={ingredient}>{ingredient}</li>
            )}
          </ol>
          <ul className="meal-info">
            <li>
              Diet: <span>{healthLabels[0]}</span>
            </li>
            <li>
              Calories: <span>{`${Math.floor(calories)}`}</span>
            </li>
            <li>
              Weight: <span>{`${Math.floor(totalWeight)}`}</span>
            </li>
          </ul>
          <a href={url}>View Recipe &#8594;</a>
        </div>
      </div>
    </section>
  );
};

export default RecipeCard;
