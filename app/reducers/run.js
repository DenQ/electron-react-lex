import { LIST } from 'lex/constants/run';

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
  return state;
}
