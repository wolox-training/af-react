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

function NavBar({ logoutHandler, isMenuDisplayed, areNotificationsDisplayed, toogleNotif, toogleMenu }) {
  const menu = isMenuDisplayed ? <Menu logoutHandler={logoutHandler} /> : undefined;
  const notifications = areNotificationsDisplayed ? <Notifications /> : undefined;
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="wolox-logo" />
      </Link>
      <nav>
        <button onClick={toogleNotif}>
          <img src={notificationsImg} alt="notifications" className="notifications-img" />
        </button>
        <img src={addBookImg} alt="addBook" className="addBook-img" />
        <button onClick={toogleMenu}>
          <img src={profileImg} alt="profile" className="profile-img" />
        </button>
        {menu}
        {notifications}
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  logoutHandler: PropTypes.func,
  toogleNotif: PropTypes.func,
  toogleMenu: PropTypes.func,
  isMenuDisplayed: PropTypes.bool,
  areNotificationsDisplayed: PropTypes.bool
};

export default NavBar;
