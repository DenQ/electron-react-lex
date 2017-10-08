import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import urlManager from './url-manager';
import album from './album';
import word from './word';
import run from './run';
import exampleForm from './example-form';

const rootReducer = combineReducers({
  form: formReducer,
  urlManager,
  counter,
  album,
  word,
  run,
  exampleForm,
  router,
});

export default rootReducer;
