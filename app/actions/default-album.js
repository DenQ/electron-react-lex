import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/album';
import dump from 'lex/db/default-album';

const ALBUM_ALRADY_EXISTING = 'album_alrady_existing'
const { albums, words } = db;

export function run() {
  return (dispatch) => {
    albums
      .where({default: 1})
      .toArray()
      .then((results) => {
        if (results.length > 0) {
          return Promise.reject({code: ALBUM_ALRADY_EXISTING});
        } else {
          return albums.add({
            name: 'default',
            description: 'default',
            cretedDT: +new Date,
            default: 1,
          });
        }
      })
      .then((albumId) => {
        const queries = dump.map((item) => {
          const { originalWord, translateWord } = item;
          return words.add({
            createdDT: +new Date,
            translateWord,
            originalWord,
            albumId,
          });
        });
        return Promise.all(queries)
      })
      .then(() => albums.toArray())
      .then((records) => {
        return dispatch({ type: LIST, records });
      })
      .catch((error) => {
        if (error.code !== ALBUM_ALRADY_EXISTING) {
          console.error(error);
        }
      });
  }
}
