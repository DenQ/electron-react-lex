import db from 'lex/db/lex.dexie';
import { LIST } from 'lex/constants/album';
import dump from 'lex/db/default-album';

const { albums, words } = db;

export function run() {
  return (dispatch) => {
    albums
      .where({default: true})
      .toArray()
      .then((results) => {
        console.log(222, results);
        if (!results.length) {
          return albums.add({
            name: 'default',
            description: 'default',
            cretedDT: +new Date,
          });
        }
      })
      .then((album)=>{
        console.log(11, album);
      })

  }
}
