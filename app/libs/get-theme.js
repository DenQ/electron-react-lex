import customStyles from 'lex/styles/custom';
import darkIndigo from 'lex/themes/dark-indigo';
import teal from 'lex/themes/teal';
import brown from 'lex/themes/brown';

const map = {
  'dark-indigo': darkIndigo,
  'teal': teal,
  'brown': brown,
}

export default function getTheme(name) {
  return Object.assign({}, customStyles, map[name]);
}
