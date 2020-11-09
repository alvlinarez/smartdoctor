import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateProps {
  component: React.ElementType;
  isAuth: boolean;
  path: string;
  exact: boolean;
}

const PrivateRoute: FunctionComponent<PrivateProps> = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
