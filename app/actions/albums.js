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
