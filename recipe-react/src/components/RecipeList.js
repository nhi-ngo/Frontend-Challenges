import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  if (!recipes) {
    return null;
  }

  const renderedList = recipes.map(recipe => <RecipeCard key={recipe.recipe.totalWeight} recipe={recipe} />);

  return <div>{renderedList}</div>;
};

export default RecipeList;
