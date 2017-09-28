import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IndigoThema from './themes/dark-indigo';
import { ipcRenderer } from 'electron';
import './app.global.scss';
import { push } from 'react-router-redux'

const store = configureStore();

ipcRenderer.on('go-to-counter', (event, filename) => {
  store.dispatch(push('/counter'));
});

render(
  <AppContainer>
    <MuiThemeProvider muiTheme={getMuiTheme(IndigoThema)}>
      <Root store={store} history={history} />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <MuiThemeProvider muiTheme={getMuiTheme(IndigoThema)}>
          <NextRoot store={store} history={history} />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
