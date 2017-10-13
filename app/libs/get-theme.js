import customStyles from 'lex/styles/custom';
import darkIndigo from 'lex/themes/dark-indigo';
import teal from 'lex/themes/teal';
import brown from 'lex/themes/brown';
import blue from 'lex/themes/blue';
import deepPurple from 'lex/themes/deep-purple';
import grey from 'lex/themes/grey';
import black from 'lex/themes/black';

const map = {
  'dark-indigo': darkIndigo,
  'teal': teal,
  'brown': brown,
  'blue': blue,
  'deep-purple': deepPurple,
  'grey': grey,
  'black': black,
}

export default function getTheme(name) {
  return Object.assign({}, customStyles, map[name]);
}
