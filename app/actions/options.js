import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/album';
import dump from 'lex/db/default-album';

const { options } = db;

export function setOption(doc) {
  return (dispatch) => {
    const { key, value } = doc;
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
      .catch((error) => {
        if (error.code !== ALBUM_ALRADY_EXISTING) {
          console.error(error);
        }
      });
  }
}
