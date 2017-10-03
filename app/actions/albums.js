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
        const record = result.length ? result[0] : null;
        callback(dispatch, record);
      })
      .catch(error => console.error(error));
  };
}

export function get() {
  return (dispatch) => {
    console.log(albums);
    // if ('find' in albums) {
    //   albums.find()
    //     .then((res)=>{
    //       console.log(111, res);
    //     })
    // }
  }
}
