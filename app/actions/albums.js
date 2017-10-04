import { push } from 'react-router-redux'
import db from '../db/lex.dexie';

const { albums } = db;

export function insert(docs, callback) {
  return (dispatch) => {
    albums.add(docs)
      .then((id) => {
        callback(dispatch, { id });
      })
      .catch(error => console.error(error));
  };
}

// @todo - replace name function
export function get() {
  return (dispatch) => {
    albums.toArray()
      .then((records) => {
        dispatch({
          type: 'list',
          records,
        })
      });
  }
}

export function remove(doc, callback) {
  return (dispatch) => {
    albums.delete(doc.id)
      .then(callback);
  }
}
