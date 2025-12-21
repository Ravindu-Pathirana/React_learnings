import React from "react";

const SearchBar = ({ onSearch }) => {
  const searchHandle = (event) => {
    //console.log(`Searching for ${event.target.value}`);
    if (onSearch) onSearch(event);
  };

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search for..."
          onChange={searchHandle}
        />
      </form>
    </div>
  );
};

export default SearchBar;
