import { LIST } from 'lex/constants/options';

const initialState = {
  records: [],
}

export default function(state = initialState, action) {
  const { type, records } = action;
  if (type === LIST) {
    return { records };
  }
  return state;
}
