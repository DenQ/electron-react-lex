/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
// import HomePage from './containers/Home/HomePage';
import MainPage from './containers/main/container';
import CounterPage from './containers/Counter/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </App>
);
