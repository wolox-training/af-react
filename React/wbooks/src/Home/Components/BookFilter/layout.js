import React from 'react';
import PropTypes from 'prop-types';

function BookFilter({ filters, handleFilterOptionChange }) {
  return (
    <select className="book-input" onChange={handleFilterOptionChange}>
      <option key="Placeholder" value="placeholder" defaultValue="selected">
        Seleccionar filtro:
      </option>
      {filters.map(filter => (
        <option key={filter} value={filter.toLowerCase()}>
          {filter}
        </option>
      ))}
    </select>
  );
}
BookFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilterOptionChange: PropTypes.func.isRequired
};

export default BookFilter;
