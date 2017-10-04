import { push } from 'react-router-redux'
import db from '../db/lex.dexie';

const { albums } = db;

export function insert(docs, callback) {
  return (dispatch) => {
    docs.createdDT = +new Date;
    albums.add(docs)
      .then((id) => {
        callback(dispatch, { id });
      })
      .catch(error => console.error(error));
  };
}

export function list() {
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

export function get(id) {
  return (dispatch) => {
    id = Number(id);
    albums.get(id)
      .then((record) => {
        dispatch({
          type: 'get',
          record,
        });
        albums.update(id, {
          lastOpened: +new Date,
        });
      });
  }

}

export function remove(doc, callback) {
  return (dispatch) => {
    albums.delete(doc.id)
      .then(callback);
  }
}
