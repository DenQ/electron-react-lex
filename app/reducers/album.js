const initialState = {
  records: [],
  record: {}
}

export default function(state = initialState, action) {
  const { type, records, record } = action;
  if (type === 'list') {
    return { records };
  }
  if (type === 'add') {
    return state;
  }
  if (type === 'get') {
    console.log(222, type, records, record);
    return { record, records: [] };
  }
  return state;
}
