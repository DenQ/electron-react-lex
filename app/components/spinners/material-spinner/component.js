import React from 'react';
import BaseComponent from 'lex/libs/base/component';
import Spinner from 'react-spinner-material';

export default class MaterialSpinner extends BaseComponent {

  render() {
    this.decorateStyle();
    const { show } = this.props;

    return (
      <Spinner
        size={200}
        spinnerColor={this.styles.palette.textColor}
        spinnerWidth={15}
        visible={show}
      />
    );
  }
}
