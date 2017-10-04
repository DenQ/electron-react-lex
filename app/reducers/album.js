import compare from '../utils/compare-last-opened';

const initialState = {
  records: [],
  record: {}
}

export default function(state = initialState, action) {
  const { type, records, record } = action;
  if (type === 'list') {
    records.sort(compare);
    return { records };
  }
  if (type === 'add') {
    return state;
  }
  if (type === 'get') {
    return { record, records: [] };
  }
  return state;
}
