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
import DropTabList from './Components/Dropdowns/DropTabList';
import DropElemList from './Components/Dropdowns/DropElemList';

function NavBar({ logoutHandler, theme }) {
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
        <Dropdowns>
          <DropTabList>
            <img src={notificationsImg} alt="notifications" className="notifications-img" />
            <img src={addBookImg} alt="addBook" className="addBook-img" />
            <img src={profileImg} alt="profile" className="profile-img" />
          </DropTabList>
          <DropElemList>
            <Notifications />
            {null}
            <Menu logoutHandler={logoutHandler} />
          </DropElemList>
        </Dropdowns>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default withTheme(NavBar);
