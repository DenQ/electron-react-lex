import db from 'lex/db/lex.dexie';
import { LIST, GET } from 'lex/constants/word';

const { words } = db;

export function insert(docs, callback) {
  return (dispatch) => {
    docs.createdDT = +new Date;
    words.add(docs)
      .then((id) => callback(dispatch, { id }) )
      .catch(error => console.error(error));
  };
}

export function list(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    return words
      .where({ albumId })
      .toArray()
      .then((records) => {
        return dispatch({ type: LIST, records });
      })
      .catch(error => console.error(error));
  }
}
