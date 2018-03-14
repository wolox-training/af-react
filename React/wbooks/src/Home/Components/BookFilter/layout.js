import React from 'react';
import PropTypes from 'prop-types';

import '../../../application.css';

function BookFilterLayout({ filters, handleFilterOptionChange }) {
  const renderedFilters = filters.map(filter => (
    <option key={filter} value={filter.toLowerCase()}>
      {filter}
    </option>
  ));

  return (
    <select className="book-input" onChange={handleFilterOptionChange}>
      <option key="Placeholder" value="placeholder" defaultValue="selected">
        Seleccionar filtro:
      </option>
      {renderedFilters}
    </select>
  );
}
BookFilterLayout.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  handleFilterOptionChange: PropTypes.func
};

export default BookFilterLayout;
