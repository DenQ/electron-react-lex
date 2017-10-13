import db from 'lex/db/lex.dexie';
import { LIST, GET } from 'lex/constants/album';
import { spinnerContainer } from 'lex/constants/spinner';

const { albums } = db;

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
      .then(callback);
  }
}
