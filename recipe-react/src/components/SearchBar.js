import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    // TODO: call callback passed down from parent
  };

  const updateSearchTerm = e => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="search-bar container">
      <h2>Featured Meals</h2>
      <form onSubmit={onFormSubmit} className="search-form">
        <input
          value={searchTerm}
          onChange={updateSearchTerm}
          className="search-term"
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
