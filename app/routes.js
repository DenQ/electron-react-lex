/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import CounterPage from './containers/Counter/CounterPage';
import ListAlbumsPage from './containers/pages/list-albums/container';
import AddAlbumPage from './containers/pages/add-album/container';
import EditAlbumPage from './containers/pages/edit-album/container';
import RunAlbumPage from './containers/pages/run-album/container';
import SettingsPage from './containers/pages/settings/container';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/add-album" component={AddAlbumPage} />
      <Route path="/edit-album/:id" component={EditAlbumPage} />
      <Route path="/run-album/:id" component={RunAlbumPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/" component={ListAlbumsPage} />
    </Switch>
  </App>
);
