// Components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a bird..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
