import db from 'lex/db/lex.dexie';
import { LIST, CLEAR_STATE } from 'lex/constants/word';
import { spinnerContainer } from 'lex/constants/spinner';
import { I18n } from 'react-redux-i18n';
import notification from 'lex/utils/notificate';

const { words } = db;

export function insert(docs, callback) {
  return (dispatch) => {
    docs.createdDT = +new Date;
    words.add(docs)
      .then((id) => callback(dispatch, { id }) )
      .catch(error => console.error(error));
  };
}

export function update(id, docs, callback) {
  return (dispatch) => {
    words.update(id, docs)
      .then((id) => callback(dispatch, { id }) )
      .catch(error => console.error(error));
  };
}

export function remove(id, callback) {
  return (dispatch) => {
    words.delete(id)
      .then(() => callback(dispatch, { id }))
      .then(() => notification(I18n.t('notifications.removed.word')))
      .catch(error => console.error(error));
  };
}

export function list(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    dispatch({
      type: spinnerContainer,
      show: true,
    });
    return words
      .where({ albumId })
      .toArray()
      .then((records) => {
        dispatch({
          type: spinnerContainer,
          show: false,
        });
        return dispatch({ type: LIST, records });
      })
      .catch(error => console.error(error));
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_STATE,
    });
  }
}
