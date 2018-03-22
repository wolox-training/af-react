import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Menu({ logoutHandler }) {
  return (
    <div className="dropdown-container">
      <button className="dropdown-option">Perfil</button>
      <button className="dropdown-option" onClick={logoutHandler}>
        Cerrar Sesion
      </button>
    </div>
  );
}

Menu.propTypes = {
  logoutHandler: PropTypes.func
};

export default Menu;
