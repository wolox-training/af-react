import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import localStorage from '../Services/LocalStorage';
import loginActions from '../redux/login/actions';
import history from '../Config/history';

import './style.css';

class DashboardContainer extends Component {
  componentWillMount() {
    if (!localStorage.getSessionToken()) {
      history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <h1>hola</h1>
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  logState: PropTypes.shape({
    loading: PropTypes.bool,
    loggedIn: PropTypes.bool,
    loginFail: PropTypes.bool
  })
};

const mapStateToProps = state => ({ logState: state.login.logState });

export default withRouter(connect(mapStateToProps)(DashboardContainer));
