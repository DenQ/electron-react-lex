import db from 'lex/db/lex.dexie';
import compareRandom from 'lex/utils/compare-random';
import { LIST } from 'lex/constants/run';

const { words } = db;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function list(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    return words
      .where({ albumId })
      .toArray()
      .then((records) => {
        const questionIndex = getRandomInt(0, records.length);
        const question = records[questionIndex - 1];
        const answers = records
          .filter((item) => Number(item.id) !== Number(question.id))
          .sort(compareRandom)
          .slice(0, 4);
        return dispatch({
          type: LIST,
          question,
          answers
        });
      })
      .catch(error => console.error(error));
  }
}
