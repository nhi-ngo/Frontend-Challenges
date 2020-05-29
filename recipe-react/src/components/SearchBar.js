import React from 'react';

const SearchBar = () => (
  <div className="search-bar container">
    <h2>Featured Meal</h2>
    <form className="search-form">
      <input className="search-term" type="text" placeholder="Search..." autoComplete="off" />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </form>
  </div>
);

export default SearchBar;
