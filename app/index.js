import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ipcRenderer, ipcMain } from 'electron';
import { push } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { I18n, setLocale } from 'react-redux-i18n';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import IndigoThema from './themes/dark-indigo';
import './app.global.scss';
import { setOption, setOptionDefault, getOption, list as listOptions } from './actions/options';
import notification from 'lex/utils/notificate';
import renderApp from './render-app';

const store = configureStore();

function setOptionValue(doc) {
  const action = setOption(doc);
  return action(store.dispatch);
}

ipcRenderer.on('go-to-counter', (event) => {
  store.dispatch(push('/counter'));
});

ipcRenderer.on('change-theme', (event, options) => {
  const { code } = options;
  setOptionValue({
    key: 'theme',
    value: code,
  });
  renderApp();
  notification(I18n.t('notifications.theme.change'));
});

ipcRenderer.on('change-locate', (event, options) => {
  const { code,stopPropagate } = options;
  setOptionValue({
    key: 'locate',
    value: code,
  }).then(() => {
    if (!stopPropagate) {
      renderApp();
      notification(I18n.t('notifications.locate.change'));
    }
    store.dispatch(setLocale(code));
  });
});

renderApp();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    renderApp(true);
  });
}
