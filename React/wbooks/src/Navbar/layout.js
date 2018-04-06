import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoDark from '../assets/wbooks_logo_dark.svg';
import logoLight from '../assets/wbooks_logo_light.svg';
import notificationsImg from '../assets/notifications.svg';
import addBookImg from '../assets/add_book.svg';
import profileImg from '../assets/cat_no_banana.jpeg';
import './style.css';
import withTheme from '../HOC/withTheme';
import { routes } from '../Config/routes';

import Menu from './Components/Menu';
import Notifications from './Components/Notifications';
import ThemeToogler from './Components/ThemeToggler';
import Dropdowns from './Components/Dropdowns';

function NavBar({
  logoutHandler,
  isMenuDisplayed,
  areNotificationsDisplayed,
  onToogleNotif,
  onToogleMenu,
  theme
}) {
  const menu = isMenuDisplayed ? <Menu logoutHandler={logoutHandler} /> : null;
  const notifications = areNotificationsDisplayed ? <Notifications /> : null;
  return (
    <header className={`navbar theme-${theme}`}>
      <Link to={routes.PRIVATE_ROUTE}>
        <img
          src={theme === 'light' ? logoLight : logoDark}
          alt="logo"
          className={`wolox-logo theme-${theme}`}
        />
      </Link>
      <ThemeToogler />
      <nav>
        <button onClick={onToogleNotif}>
          <img src={notificationsImg} alt="notifications" className="notifications-img" />
        </button>
        <img src={addBookImg} alt="addBook" className="addBook-img" />
        <button onClick={onToogleMenu}>
          <img src={profileImg} alt="profile" className="profile-img" />
        </button>
        <Dropdowns>
          <Notifications />
          <Menu />
        </Dropdowns>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  onToogleNotif: PropTypes.func.isRequired,
  onToogleMenu: PropTypes.func.isRequired,
  isMenuDisplayed: PropTypes.bool.isRequired,
  areNotificationsDisplayed: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

export default withTheme(NavBar);
