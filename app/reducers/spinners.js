import { spinnerContainer } from 'lex/constants/spinner';

const initialState = {
  pageContainer: { show: false },
}

export default function(state = initialState, action) {
  const { type, show } = action;
  if (type === spinnerContainer) {
    return Object.assign({}, initialState, {
      pageContainer: { show }
    });
  }
  return state;
}
