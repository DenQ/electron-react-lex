import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from 'react-redux-i18n';

import counter from './counter';
import urlManager from './url-manager';
import album from './album';
import word from './word';
import run from './run';
import exampleForm from './example-form';
import options from './options';
import spinners from './spinners';
import statisticsAlbum from './statistincs-album';

const rootReducer = combineReducers({
  i18n: i18nReducer,
  form: formReducer,
  urlManager,
  counter,
  album,
  word,
  run,
  exampleForm,
  router,
  options,
  spinners,
  statisticsAlbum,
});

export default rootReducer;
