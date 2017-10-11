import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/options';

const { options } = db;

export function setOption(doc) {
  return (dispatch) => {
    const { key } = doc;
    options
      .where({ key })
      .toArray()
      .then((results) => {
        if (results.length > 0) {
          const record = results[0];
          return options.update(record.id, doc);
        } else {
          return options.add(doc);
        }
      })
      .then(() => {
        return list()(dispatch);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function list() {
  return (dispatch) => {
    options
      .toArray()
      .then((records) => {
        dispatch({
          type: LIST,
          records,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
