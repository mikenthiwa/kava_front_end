import React from 'react';
import Home from '../App'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../components/auth/login';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        path='/login'
        component={Login}
      />
    </Switch>
  </BrowserRouter>
);

export default routes;


