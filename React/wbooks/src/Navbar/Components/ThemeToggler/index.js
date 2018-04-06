// Source: https://codepen.io/jsndks/pen/qEXzOQ

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import withTheme from '../../../HOC/withTheme';

function ThemeToggler({ handleToogleTheme }) {
  return (
    <div className="wrapper">
      <div className="toggle">
        <input className="toggle-input" type="checkbox" onClick={handleToogleTheme} />
        <div className="toggle-bg" />
        <div className="toggle-switch">
          <div className="toggle-switch-figure" />
          <div className="toggle-switch-figureAlt" />
        </div>
      </div>
    </div>
  );
}

ThemeToggler.propTypes = {
  handleToogleTheme: PropTypes.func.isRequired
};

export default withTheme(ThemeToggler);
