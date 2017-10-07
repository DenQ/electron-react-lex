const LOAD = 'redux-form-examples/account/LOAD1';

const initialState = {
  data: {
    originalWord: 111,
    translateWord: 222
  },
};

export default function(state = initialState, action) {
  const { type, data } = action;
  if (type === LOAD) {
    return { data };
  }
  return state;
}
