const LOAD = 'redux-form-examples/account/LOAD';

const initilState = {
  data: {},
}

const reducer = (state = initilState, action) => {
  if (action.type === LOAD) {
    console.log(12345, action, action.data);
    return {
      data: action.data,
    }
  }
  return state;
}

export const load = data => {
  console.log(2222);
  return { type: LOAD, data }
}

export default reducer;
