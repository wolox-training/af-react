import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AnonymousRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !authed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default AnonymousRoute;
