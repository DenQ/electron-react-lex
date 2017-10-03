// import { SET_100_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

// export type counterStateType = {
//   +counter: number
// };
//
// type actionType = {
//   +type: string
// };

const initialState = {
  albums: [],
}

export default function(state = initialState, action) {
  const { type } = action;
  if (type === 'list') {
    return state;
  }
  if (type === 'add') {
    return state;
  }
  return state;
  // switch (action.type) {
  //   case SET_100_COUNTER:
  //     return 100;
  //   case INCREMENT_COUNTER:
  //     return state + 1;
  //   case DECREMENT_COUNTER:
  //     return state - 1;
  //   default:
  //     return state;
  // }
}
