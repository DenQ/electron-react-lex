import db from 'lex/db/lex.dexie';
import { spinnerContainer } from 'lex/constants/spinner';

export function showPageContainer() {
  return (dispatch) => {
    return dispatch({
      type: spinnerContainer,
      show: true,
    });
  }
}

export function hidePageContainer() {
  return (dispatch) => {
    return dispatch({
      type: spinnerContainer,
      show: false,
    });
  }
}
