import React from 'react';

import './search-box.styles.css';

const searchBox = ({onSearchChange}) => {
  return (
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChange}
      />
  );
}

export default searchBox;
