import db from 'lex/db/lex.dexie';
import { LIST, GET } from 'lex/constants/album';
import { PULL, HIT_OVER, CLEAR } from 'lex/constants/statistics-album';
import { spinnerContainer } from 'lex/constants/spinner';
import { I18n } from 'react-redux-i18n';
import notification from 'lex/utils/notificate';

const { albums, words } = db;

export function insert(docs, callback) {
  return (dispatch) => {
    docs.createdDT = +new Date;
    albums.add(docs)
      .then((id) => callback(dispatch, { id }) )
      .catch(error => console.error(error));
  };
}

export function list() {
  return (dispatch) => {
    dispatch({
      type: spinnerContainer,
      show: true,
    });
    return albums.toArray()
      .then((records) => {
        dispatch({
          type: spinnerContainer,
          show: false,
        });
        return dispatch({ type: LIST, records });
      });
  }
}

export function get(id) {
  return (dispatch) => {
    id = Number(id);
    return albums.get(id)
      .then((record) => {
        dispatch({ type: GET, record });
        return albums.update(id, {
          lastOpened: +new Date,
        });
      });
  }
}

export function remove(doc, callback) {
  return (/*dispatch*/) => {
    return albums.delete(doc.id)
      .then(callback)
      .then(() => notification(I18n.t('notifications.removed.album')));
  }
}

export function resetStatistics(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    return words
      .where({albumId})
      .modify((item) => {
        item.hit = 0;
      });
  }
}

export function pullStatistics(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    return words
      .where({albumId})
      .toArray()
      .then((results) => {
        dispatch({
          type: PULL,
          length: results.length,
          learned: results.filter(item => item.hit >= HIT_OVER).length,
        });
      })
  }
}

export function clearStatistics() {
  return (dispatch) => {
    dispatch({
      type: CLEAR,
      length: 0,
      learned: 0,
    });
  }
}
