import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Join from './components/Join';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import NewEvent from './components/New-Event/NewEvent';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Login} path="/login" exact />
          <Route component={Join} path="/join" exact />
          <Route component={Home} path="/" exact />
          <PrivateRoute
            component={NewEvent}
            isAuth={isAuth}
            path="/new-event"
            exact
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
