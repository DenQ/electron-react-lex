import db from 'lex/db/lex.dexie';
import { LIST, GET } from 'lex/constants/album';
import { PULL, HIT_OVER, CLEAR } from 'lex/constants/statistics-album';
import { spinnerContainer } from 'lex/constants/spinner';
import { I18n } from 'react-redux-i18n';
import notification from 'lex/utils/notificate';

const { albums, words } = db;
const ALBUM_IS_EMPTY = 'album_is_empty';

export function insert(docs, callback) {
  return (dispatch) => {
    docs.createdDT = +new Date;
    docs.size = 0;
    docs.learned = 0;
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
      .then((results) => {
        const pull = [];
        results.forEach((item) => {
          const query = recalculateAlbum(item.id)(dispatch);
          pull.push(query);
        });
        return Promise.all(pull);
      })
      .then(() => albums.toArray())
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

export function recalculateAlbum(albumId) {
  console.log(222);
  return (dispatch) => {
    return words
      .where({ albumId })
      .toArray()
      .then((results) => {
        if (results.length === 0) {
          return Promise.reject({code: ALBUM_IS_EMPTY});
        }
        return {
          size: results.length,
          learned: results.filter(item => item.hit >= HIT_OVER).length,
        };
      })
      .then((infoAlbum) => {
        return albums.update(albumId, infoAlbum);
      })
      .catch((error) => {
        if (error.code == ALBUM_IS_EMPTY) {
          console.log(error);
        }
      });
  }
}
