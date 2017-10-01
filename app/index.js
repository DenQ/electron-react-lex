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
import IndigoOrangeThema from './themes/dark-indigo-orange';
import { ipcRenderer } from 'electron';
import './app.global.scss';
import { push } from 'react-router-redux'

const store = configureStore();

ipcRenderer.on('go-to-counter', (event) => {
  store.dispatch(push('/counter'));
});

let thema = IndigoThema;

function renderApp(flag) {
  let root;
  if (flag) {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    root = <NextRoot store={store} history={history} />;
  } else {
    root = (<Root store={store} history={history} />);
  }
  render(
    <AppContainer>
      <MuiThemeProvider muiTheme={getMuiTheme(thema)}>
        {root}
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
  );
}

// setTimeout(()=>{
//   thema = IndigoOrangeThema;
//   renderApp();
// }, 1500);

renderApp();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    renderApp(true);
  });
}
