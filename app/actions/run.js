import db from 'lex/db/lex.dexie';
import compareRandom from 'lex/utils/compare-random';
import getRandomInt from 'lex/utils/get-random';
import { LIST, CLEAR_STATE } from 'lex/constants/run';
import { spinnerContainer } from 'lex/constants/spinner';

const { words } = db;
const SIZE = 5;
const ALBUM_IS_EMPTY = true;
const HIT_OVER = 1;

export function list(albumId) {
  albumId = Number(albumId);
  return (dispatch) => {
    dispatch({
      type: spinnerContainer,
      show: true,
    });
    return words
      .where({albumId})
      .toArray()
      .then((records) => {
        records = records.filter(item => item.hit < HIT_OVER);
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
        dispatch({
          type: spinnerContainer,
          show: false,
        });
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
        } else {
          dispatch({
            type: spinnerContainer,
            show: false,
          });
        }
      });
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_STATE,
    });
  }
}

export function incrementHit(wordId) {
  return () => {
    return words
      .where({id :wordId})
      .modify((item) => {
        item.hit++;
      });
  }
}

export function resetOneHit(wordId) {
  return (dispatch) => {
    return words
      .where({id: wordId})
      .modify((item) => {
        item.hit = 0;
      });
  }
}

export function resetDoubleHit(words) {
  return (dispatch) => {
    return Promise.all([
      resetOneHit(words[0])(dispatch),
      resetOneHit(words[1])(dispatch),
    ]);
  }
}
