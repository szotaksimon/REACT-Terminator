import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green"
        type="search"
        placeholder="Modell keresése.."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
