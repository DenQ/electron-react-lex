import { PULL, CLEAR } from 'lex/constants/statistics-album';

const initialState = {
  length: 0,
  learned: 0,
}

export default function(state = initialState, action) {
  const { type, length, learned } = action;
  if (type === PULL) {
    return Object.assign({}, { length, learned });
  }
  if (type === CLEAR) {
    return Object.assign({}, initialState);
  }
  return state;
}
