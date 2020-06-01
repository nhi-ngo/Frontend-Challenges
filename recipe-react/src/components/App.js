import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('beef');

  const APP_ID = '51c2a84f';
  const APP_KEY = 'b89c4f920400bed5f3ffa1349fbd5684';

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const onTermSubmit = () => {
    setQuery(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="App">
      <SearchBar onFormSubmit={onTermSubmit} onInputChange={onInputChange} value={searchTerm}/>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;

// TODO
// 1.Search for meals
// 2.Display the results

