const initialState = {
  records: [],
}

export default function(state = initialState, action) {
  const { type, records } = action;
  if (type === 'list') {
    return { records };
  }
  if (type === 'add') {
    return state;
  }
  return state;
}
