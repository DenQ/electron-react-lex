import {
  red800 as errorColor,
  grey300,
  white, darkBlack, fullBlack, black
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const [ primary1Color, primary2Color, primary3Color] = [
  fade(white, 0.9),
  fade(white, 0.7),
  fade(black, 0.9)
];

const [ accent1Color, accent2Color, accent3Color] = [
  fade(black, 0.3),
  fade(black, 0.6),
  fade(black, 0.9)
];

const palette = {
  primary1Color,
  primary2Color,
  primary3Color,
  accent1Color,
  accent2Color,
  accent3Color,
  textColor: black,
  alternateTextColor: black,
  canvasColor: white,
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
    hoverColor: fade(primary3Color, 0.5),
  },
  badge: {
    primaryColor: palette.accent1Color,
    secondaryColor: palette.accent3Color,
   secondaryTextColor: white,
  },
  body:{
    backgroundColor: palette.primary2Color,
  }
};
