import React from 'react';
import BaseComponent from 'lex/libs/base/component';
import { Field } from 'redux-form';
import { MenuItem } from 'material-ui';
import { SelectField } from 'redux-form-material-ui';
// import themes from 'lex/constants/menu-themes';


export default class SelectCustom extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    this.decorateStyle();
    const { data, fieldName } = this.props;
    const items = data.map((item, index) => {
      return (
        <MenuItem
          primaryText={item.label}
          value={item.code}
          key={index}
        />
      );
    });
    return (
      <Field
        floatingLabelText="Theme"
        component={SelectField}
        hintText="Theme"
        fullWidth={true}
        name={fieldName}
      >
        {items}
      </Field>
    );
  }
}
