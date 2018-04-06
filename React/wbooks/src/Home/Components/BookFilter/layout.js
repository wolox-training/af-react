import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from '../../../HOC/withTheme';

import './style.css';

function BookFilter({ filters, handleFilterOptionChange, theme }) {
  return (
    <select className={`book-input theme-${theme}`} onChange={handleFilterOptionChange}>
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
  handleFilterOptionChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default withTheme(BookFilter);
