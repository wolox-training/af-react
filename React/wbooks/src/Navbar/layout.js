import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoDark from '../assets/wbooks_logo_dark.svg';
import logoLight from '../assets/wbooks_logo_light.svg';
import notificationsImg from '../assets/notifications.svg';
import addBookImg from '../assets/add_book.svg';
import profileImg from '../assets/cat_no_banana.jpeg';
import './style.css';
import { ThemeContext } from '../Context/ThemeProvider';

import Menu from './Components/Menu';
import Notifications from './Components/Notifications';
import ThemeToogler from './Components/ThemeToggler';

function NavBar({ logoutHandler, isMenuDisplayed, areNotificationsDisplayed, onToogleNotif, onToogleMenu }) {
  const menu = isMenuDisplayed ? <Menu logoutHandler={logoutHandler} /> : null;
  const notifications = areNotificationsDisplayed ? <Notifications /> : null;
  return (
    <ThemeContext.Consumer>
      {context => (
        <header className={`navbar theme-${context.state.theme}`}>
          <Link to="/">
            <img
              src={context.state.theme === 'light' ? logoLight : logoDark}
              alt="logo"
              className={`wolox-logo theme-${context.state.theme}`}
            />
          </Link>
          <button onClick={context.handleToogleTheme}>
            <ThemeToogler onClick={context.handleToogleTheme} />
          </button>
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
      )}
    </ThemeContext.Consumer>
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
