import { push } from 'react-router-redux'
import db from '../database';
import lastInsertElement from '../utils/last-insert-element';

const albums = db.collection('albums');

export function insert(docs, callback) {
  return (dispatch) => {
    albums.insert(docs)
      .then(() => {
        return lastInsertElement(albums);
      })
      .then((result) => {
        callback(dispatch, result);
      })
      .catch(error => console.error(error));
  };
}
