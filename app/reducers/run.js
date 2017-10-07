import { LIST } from 'lex/constants/run';

const initialState = {
  question: {},
  answers: [],
  rightAnswer: {},
}

export default function(state = initialState, action) {
  const { type, question, answers, rightAnswer} = action;
  if (type === LIST) {
    return { question, answers, rightAnswer };
  }
  return state;
}
