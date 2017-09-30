// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import urlManager from './url-manager';

const rootReducer = combineReducers({
  urlManager,
  counter,
  router,
});

export default rootReducer;
