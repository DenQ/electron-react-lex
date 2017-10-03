import {
  indigo300, indigo700, indigo900,
  pinkA100, pinkA200, pinkA400, pinkA700,
  pink500, pink700,
  grey100, grey300, grey400, grey500,
  cyan500, cyan700,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
// import spacing from '../spacing';

export default {
  // spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: indigo900,
    primary2Color: indigo700,
    primary3Color: indigo300,
    accent1Color: pinkA200,
    accent2Color: pinkA100,
    accent3Color: pinkA400,
    textColor: white,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  raisedButton: {
    disabledColor: pinkA100,
    disabledTextColor: fade(white, 0.6),
  },
};
