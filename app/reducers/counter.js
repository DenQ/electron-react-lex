// @flow
import { SET_100_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

export default function counter(state: number = 0, action: actionType) {
  switch (action.type) {
    case SET_100_COUNTER:
      return 100;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
