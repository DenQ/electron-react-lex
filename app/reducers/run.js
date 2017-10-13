import { LIST, CLEAR_STATE } from 'lex/constants/run';

const initialState = {
  question: {},
  answers: [],
  vector: false,
}

export default function(state = initialState, action) {
  const { type, question, answers, vector } = action;
  if (type === LIST) {
    return { question, answers, vector };
  }
  if (type === CLEAR_STATE) {
    return Object.assign({}, initialState);
  }
  return state;
}
