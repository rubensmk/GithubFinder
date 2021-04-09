import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Searched from '../pages/Searched';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:login+" component={Profile} />
    <Route path="/searched" component={Searched} />
  </Switch>
);

export default Routes;
