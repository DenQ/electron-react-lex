import React from 'react';
import BaseComponent from 'lex/libs/base/component';
import { Field } from 'redux-form';
import { MenuItem } from 'material-ui';
import { SelectField } from 'redux-form-material-ui';

export default class SelectCustom extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    this.decorateStyle();
    const { data, fieldName, floatingLabelText, hintText, fullWidth } = this.props;
    const items = data.map((item, index) => {
      const key = `select-${index}`;
      return (
        <MenuItem
          primaryText={item.label}
          value={item.code}
          key={key}
        />
      );
    });
    return (
      <Field
        floatingLabelText={floatingLabelText}
        component={SelectField}
        hintText={hintText}
        fullWidth={fullWidth}
        name={fieldName}
      >
        {items}
      </Field>
    );
  }
}
