import customStyles from 'lex/styles/custom';
import darkIndigo from 'lex/themes/dark-indigo';
import darkIndigoOrage from 'lex/themes/dark-indigo-orange';
import teal from 'lex/themes/teal';

const map = {
  'dark-indigo-orange': darkIndigoOrage,
  'dark-indigo': darkIndigo,
  'teal': teal,
}

export default function getTheme(name) {
  return Object.assign({}, customStyles, map[name]);
}
