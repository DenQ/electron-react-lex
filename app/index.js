import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ipcRenderer } from 'electron';
import { push } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
// import DarkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import LightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import IndigoThema from './themes/dark-indigo';
// import IndigoOrangeThema from './themes/dark-indigo-orange';
import './app.global.scss';
import { setOption } from './actions/options';

const store = configureStore();

let thema = IndigoThema;

ipcRenderer.on('go-to-counter', (event) => {
  store.dispatch(push('/counter'));
});

ipcRenderer.on('change-theme', (event, options) => {
  const { code } = options;
  thema = require(`./themes/${code}`);
  renderApp();
});


function renderApp(flag) {
  const action = setOption({
    key: 'test',
    value: 'off'
  });
  action(store.dispatch);
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
