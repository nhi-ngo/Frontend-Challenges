import React, { useState, useEffect } from 'react';
import RandomMeals from './RandomMeals';
import SearchBar from './SearchBar';

const App = () => (
  <div className="App">
    <SearchBar />
    <RandomMeals />
  </div>
);

export default App;

// TODO
// 1.Search for meals
// 2.Display the results
