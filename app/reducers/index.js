// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import urlManager from './url-manager';

const rootReducer = combineReducers({
  form: formReducer,
  urlManager,
  counter,
  router,
});

export default rootReducer;
