import React from 'react';

const SearchBar = props => {

  const onFormSubmit = e => {
    e.preventDefault();

    // TODO: call callback passed down from parent
    props.onFormSubmit(props.value);
  };

  return (
    <div className="search-bar container">
      <h2>Featured Meals</h2>
      <form onSubmit={onFormSubmit} className="search-form">
        <input
          value={props.value}
          onChange={(e)=> props.onInputChange(e)}
          className="search-term"
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
