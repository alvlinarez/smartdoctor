import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// @ts-ignore
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './components/Login';
import Join from './components/Join';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import NewEvent from './components/New-Event/NewEvent';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={Login} path="/login" exact />
            <Route component={Join} path="/join" exact />
            <Route component={Home} path="/" exact />
            <PrivateRoute
              component={NewEvent}
              isAuth={false}
              path="/new-event"
              exact
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
