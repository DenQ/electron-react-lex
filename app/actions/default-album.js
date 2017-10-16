import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/album';
import dump from 'lex/db/default-album';

const ALBUM_ALRADY_EXISTING = 'album_alrady_existing';
const COUNT_ALBUMS = 3;
const albumName = 'Irregular verbs';
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
          const pull = [];
          for(let i=0; i<COUNT_ALBUMS; i++) {
            const request =  albums.add({
              name: `${albumName} (Part ${i+1})`,
              description: 'Default album',
              cretedDT: +new Date,
              default: 1,
            });
            pull.push(request);
          }
          return Promise.all(pull);
        }
      })
      .then((albums) => {
        const lenthAlbums = albums.length;
        let counter = 0;
        const queries = dump.map((item) => {
          const albumId = albums[counter];
          if (counter < lenthAlbums-1) {
            counter = counter + 1;
          } else {
            counter = 0;
          }
          const { originalWord, translateWord } = item;
          return words.add({
            createdDT: +new Date,
            translateWord,
            originalWord,
            albumId,
            hit: 0,
          });
        });
        return Promise.all(queries);
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
