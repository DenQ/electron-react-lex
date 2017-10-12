import {
  indigo900 as primary1Color,
  indigo700 as primary2Color,
  indigo300 as primary3Color,

  pinkA200 as accent1Color,
  pinkA100 as accent2Color,
  pinkA400 as accent3Color,

  red800 as errorColor,
  grey300,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const palette = {
  primary1Color,
  primary2Color,
  primary3Color,
  accent1Color,
  accent2Color,
  accent3Color,
  textColor: white,
  alternateTextColor: white,
  canvasColor: primary3Color,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: white,
  clockCircleColor: fade(darkBlack, 0.7),
  shadowColor: fullBlack,
};

export default {
  palette,
  fontFamily: 'Roboto, sans-serif',
  raisedButton: {
    secondaryColor: accent1Color,
    disabledColor: accent2Color,
    disabledTextColor: fade(white, 0.6),
  },
  textField: {
    errorColor: errorColor,
  },
  menuItem: {
    hoverColor: fade(primary2Color, 0.6),
  },
  body:{
    backgroundColor: palette.primary2Color,
  }
};
