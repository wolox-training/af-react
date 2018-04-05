import React from 'react';

import './style.css';

function ThemeToggler() {
  return (
    <div className="wrapper">
      <div className="toggle">
        <input className="toggle-input" type="checkbox" />
        <div className="toggle-bg" />
        <div className="toggle-switch">
          <div className="toggle-switch-figure" />
          <div className="toggle-switch-figureAlt" />
        </div>
      </div>
    </div>
  );
}

export default ThemeToggler;
