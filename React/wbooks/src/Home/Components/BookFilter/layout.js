import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../Context/ThemeProvider';
import './style.css';

function BookFilter({ filters, handleFilterOptionChange }) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <select className={`book-input theme-${context.state.theme}`} onChange={handleFilterOptionChange}>
          <option key="Placeholder" value="placeholder" defaultValue="selected">
            Seleccionar filtro:
          </option>
          {filters.map(filter => (
            <option key={filter} value={filter.toLowerCase()}>
              {filter}
            </option>
          ))}
        </select>
      )}
    </ThemeContext.Consumer>
  );
}
BookFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilterOptionChange: PropTypes.func.isRequired
};

export default BookFilter;
