import React from 'react';
// @ts-ignore
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import NewEvent from './components/New-Event/NewEvent';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Login} path="/login" exact />
          <Route component={Join} path="/join" exact />
          <Route component={Home} path="/" exact />
          <Route component={NewEvent} path="/new-event" exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
