import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../assets/wbooks_logo.svg';
import notificationsImg from '../assets/notifications.svg';
import addBookImg from '../assets/add_book.svg';
import profileImg from '../assets/cat_no_banana.jpeg';
import './style.css';

import Menu from './Components/Menu';
import Notifications from './Components/Notifications';

function NavBar({ logoutHandler, isMenuDisplayed, areNotificationsDisplayed, onToogleNotif, onToogleMenu }) {
  const menu = isMenuDisplayed ? <Menu logoutHandler={logoutHandler} /> : null;
  const notifications = areNotificationsDisplayed ? <Notifications /> : null;
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="wolox-logo" />
      </Link>
      <nav>
        <button onClick={onToogleNotif}>
          <img src={notificationsImg} alt="notifications" className="notifications-img" />
        </button>
        <img src={addBookImg} alt="addBook" className="addBook-img" />
        <button onClick={onToogleMenu}>
          <img src={profileImg} alt="profile" className="profile-img" />
        </button>
        {menu}
        {notifications}
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  onToogleNotif: PropTypes.func.isRequired,
  onToogleMenu: PropTypes.func.isRequired,
  isMenuDisplayed: PropTypes.bool.isRequired,
  areNotificationsDisplayed: PropTypes.bool.isRequired
};

export default NavBar;
