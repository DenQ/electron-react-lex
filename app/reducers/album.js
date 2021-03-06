import compare from 'lex/utils/compare-last-opened';
import { LIST, GET, ADD } from 'lex/constants/album';

const initialState = {
  records: [],
  record: {}
}

export default function(state = initialState, action) {
  const { type, records, record } = action;
  if (type === LIST) {
    records.sort(compare);
    return { records };
  }
  if (type === ADD) {
    return state;
  }
  if (type === GET) {
    return { record, records: [] };
  }
  return state;
}
