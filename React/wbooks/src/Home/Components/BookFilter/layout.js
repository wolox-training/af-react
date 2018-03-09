import React, { Component } from 'react';

import '../../../application.css';

function BookFilter({ filters }) {
  const renderedFilters = filters.map(filter => (
    <option key={filter} value={filter.toLowerCase()}>
      {filter}
    </option>
  ));

  return (
    <select className="book-input" onChange={this.handleFilterOptionChange}>
      <option key="Placeholder" value="placeholder" defaultValue="selected">
        Seleccionar filtro:
      </option>
      {renderedFilters}
    </select>
  );
}
BookFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterOptionChange: PropTypes.func
};
