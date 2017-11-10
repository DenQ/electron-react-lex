import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { I18n, setLocale } from 'react-redux-i18n';
import notification from 'lex/utils/notificate';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import IndigoThema from './themes/dark-indigo';
import './app.global.scss';
import {
  setOption,
  setOptionDefault,
  getOption,
  list as listOptions
} from './actions/options';

const { remote } = require('electron');
const currentWindow = remote.getCurrentWindow();
const store = configureStore();
let thema = IndigoThema;

function setOptionValue(doc) {
  const action = setOption(doc);
  return action(store.dispatch);
}

function setOptionDefaultValue(doc) {
  const action = setOptionDefault(doc);
  return action(store.dispatch);
}

export default function renderApp(flag) {
  return listOptions()(store.dispatch)
    .then(() => {
      return getOption('theme')();
    })
    .then((result) => {
      const { key, value } = result;
      const code = value;
      thema = require(`./themes/${code}`);
      return thema;
    })
    .then(() => {
      return setOptionDefaultValue({
        key: 'locate',
        value: 'ru',
      });
    })
    .then(() => {
      return setOptionDefaultValue({
        key: 'hitSize',
        value: 5,
      });
    })
    .then((results) => {
      const locate = results.filter((item) => item.key === 'locate');
      const code = locate.length > 0 ? locate[0].value : 'en';
      currentWindow.send('change-locate', { code, stopPropagate: true });
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
