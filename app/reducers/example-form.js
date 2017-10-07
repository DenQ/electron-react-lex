const LOAD = 'redux-form-examples/account/LOAD';

const initilState = {
  data: {},
}

const reducer = (state = initilState, action) => {
  if (action.type === LOAD) {
    return {
      data: action.data,
    }
  }
  return state;
}

export const load = data => {
  return { type: LOAD, data }
}

export default reducer;
