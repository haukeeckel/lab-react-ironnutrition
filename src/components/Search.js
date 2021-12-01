import React from 'react';

function Search({ fnSeach }) {
  return (
    <div>
      <input
        className="input is-info"
        name="search"
        type="text"
        placeholder="Search Food"
        onChange={fnSeach}
      />
    </div>
  );
}

export default Search;
