import { LIST, GET, ADD } from 'lex/constants/album';
import db from 'lex/db/lex.dexie';

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
    return albums.toArray()
      .then((records) => {
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
