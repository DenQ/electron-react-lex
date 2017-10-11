import React, { Component } from 'react';
import Styles from 'lex/styles/custom';
import getTheme from 'lex/libs/get-theme';

function decorateStyle() {
  const { options } = this.props;
  const filtered = options.records.filter(item => item.key === 'theme');
  const codeTheme = filtered.length > 0 ? filtered[0].value : null;
  if (codeTheme) {
    const theme = getTheme(codeTheme);
    // this.styles.body.backgroundColor = theme.palette.primary2Color
    // this.styles = Object.assign({}, this.styles, {
    //   body: {
    //     backgroundColor: theme.palette.primary2Color,
    //   }
    // })
    this.styles = theme;

  }
}

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.styles = Styles;
    this.decorateStyle = this.decorateStyle.bind(this);
  }

  decorateStyle() {
    decorateStyle.call(this);
  }

}
