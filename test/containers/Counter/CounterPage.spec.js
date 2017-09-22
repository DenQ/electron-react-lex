import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import CounterPage from '../../../app/containers/Counter/CounterPage';
import { configureStore } from '../../../app/store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const app = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CounterPage />
      </ConnectedRouter>
    </Provider>
  );
  return {
    app,
    buttons: app.find('button'),
    p: app.find('.counter')
  };
}

describe('containers', () => {
  describe('App', () => {
    it('should display initial count', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^0$/);
    });

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup();
      buttons.at(0).simulate('click');
      expect(p.text()).toMatch(/^1$/);
    });

    it('should display updated count after descrement button click', () => {
      const { buttons, p } = setup();
      buttons.at(1).simulate('click');
      expect(p.text()).toMatch(/^-1$/);
    });

    it('shouldnt change if even and if odd button clicked', () => {
      const { buttons, p } = setup();
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^0$/);
    });

    it('should change if odd and if odd button clicked', () => {
      const { buttons, p } = setup({ counter: 1 });
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^2$/);
    });

    it('should set counter to 100', () => {
      const { buttons, p } = setup({ counter: 1 });
      // console.log(buttons.at(4).find('.fa-grav').length);//1
      buttons.at(4).simulate('click');
      expect(p.text()).toMatch(/^100$/);
    });

  });
});
