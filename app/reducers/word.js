import compare from 'lex/utils/compare-by-id';
import { LIST, GET, ADD, CLEAR_STATE } from 'lex/constants/word';

const initialState = {
  records: [],
  record: {},
}

export default function(state = initialState, action) {
  const { type, records, record } = action;
  if (type === LIST) {
    records.sort(compare(false));
    return { records };
  }
  if (type === ADD) {
    return state;
  }
  if (type === GET) {
    return { record, records: [] };
  }
  if (type === CLEAR_STATE) {
    return Object.assign({}, initialState);
  }
  return state;
}
