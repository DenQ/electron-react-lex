import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ipcRenderer } from 'electron';
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

const store = configureStore();

let thema = IndigoThema;

ipcRenderer.on('go-to-counter', (event) => {
  store.dispatch(push('/counter'));
});

ipcRenderer.on('change-theme', (event, options) => {
  const { code } = options;
  thema = require(`./themes/${code}`);
  setOptionValue({
    key: 'theme',
    value: code,
  });
  renderApp();
  notification(I18n.t('notifications.theme.change'));
});

ipcRenderer.on('change-locate', (event, options) => {
  const { code } = options;
  setOptionValue({
    key: 'locate',
    value: code,
  }).then(() => {
    renderApp();
    notification(I18n.t('notifications.locate.change'));
  });
});

getOption('theme')().then((result) => {
  if (result) {
    const { key, value } = result;
    const code = value;
    thema = require(`./themes/${code}`);
    renderApp();
  }
});

function setOptionValue(doc) {
  const action = setOption(doc);
  return action(store.dispatch);
}

function setOptionDefaultValue(doc) {
  const action = setOptionDefault(doc);
  return action(store.dispatch);
}

function renderApp(flag) {
  listOptions()(store.dispatch)
    .then(() => {
      return setOptionDefaultValue({
        key: 'hitSize',
        value: 5,
      });
    })
    .then((results) => {
      const locate = results.filter((item) => item.key === 'locate');
      const code = locate.length > 0 ? locate[0].value : 'en';
      store.dispatch(setLocale(code));
      return results;
    })
    .then(() => {
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
    })
    .catch((error) => {
      notification(error);
      console.log(error);
    });
}

renderApp();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    renderApp(true);
  });
}
