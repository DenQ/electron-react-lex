import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/options';

const { options } = db;

export function setOption(doc) {
  return (dispatch) => {
    const { key } = doc;
    return options
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
    return options
      .toArray()
      .then((records) => {
        dispatch({
          type: LIST,
          records,
        });
        return records;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function getOption(key) {
  return () => {
    return options
      .toArray()
      .then((records) => {
        records = records.filter((item) => item.key === key);
        return records.length > 0 ? records[0] : null;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
