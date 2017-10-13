import db from 'lex/db/lex.dexie';
import compareRandom from 'lex/utils/compare-random';
import getRandomInt from 'lex/utils/get-random';
import { LIST } from 'lex/constants/run';

const { words } = db;
const SIZE = 6;
const ALBUM_IS_EMPTY = true;

export function list(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    return words
      .where({ albumId })
      .toArray()
      .then((records) => {
        if (records.length === 0) {
          return Promise.reject({code: ALBUM_IS_EMPTY});
        }
        const vector = Boolean(getRandomInt(0, 1));
        const questionIndex = getRandomInt(0, records.length - 1);
        const question = records[questionIndex];
        const answers = records
          .filter((item) => Number(item.id) !== Number(question.id))
          .sort(compareRandom)
          .slice(0, SIZE);
        answers.push(question);
        for(let i=0; i<2*SIZE; i++) {
          answers.sort(compareRandom);
        }
        return dispatch({
          type: LIST,
          question,
          answers,
          vector,
        });
      })
      .catch((error) => {
        if (error.code !== ALBUM_IS_EMPTY) {
          console.error(error)
        }
      });
  }
}
