import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <MuiThemeProvider>
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
        <MuiThemeProvider>
          <NextRoot store={store} history={history} />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
