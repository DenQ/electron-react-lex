/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import CounterPage from './containers/Counter/CounterPage';
import AddAlbumPage from './containers/pages/add-album/container';
import ListAlbumsPage from './containers/pages/list-albums/container';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/add-album" component={AddAlbumPage} />
      <Route path="/" component={ListAlbumsPage} />
    </Switch>
  </App>
);
