import { push } from 'react-router-redux'

export function transitionTo(path) {
  return (dispatch) => {
    dispatch(push(path));
  };
}
