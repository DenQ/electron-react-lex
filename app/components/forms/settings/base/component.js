import React from 'react';
import { RaisedButton, MenuItem } from 'material-ui';
import {
  TextField,
  SelectField
} from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { pullData } from 'lex/actions/form-setup';
import fillData from 'lex/utils/object-fill-from-data';
import themes from 'lex/constants/menu-themes';

const validate = values => {
  const errors = {};
  const { hitSize } = values;
  if (!hitSize) {
    errors.hitSize = I18n.t('components.forms.required');
  } else if (isNaN(Number(hitSize))) {
    errors.hitSize = I18n.t('components.forms.mustBeNumber');
  } else if (Number(hitSize) <= 0) {
    errors.hitSize = I18n.t('components.forms.mustBeGreaterZero');
  }
  return errors;
};

const ThemeSelect = () => {
  const items = themes.map((item, index) => {
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
      name="theme"
    >
      {items}
    </Field>
  );
};

class SettingsBaseForm extends BaseComponent {

  componentDidMount() {
    const { data, load, form } = this.props;
    if (form, data) {
      const fields = fillData(data);
      Object.keys(fields).forEach((item) => {
        const value = fields[item];
        if (value) {
          load('settings-base', item, value);
        }
      });
    }
  }

  render() {
    this.decorateStyle();
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder={I18n.t('components.forms.settings.placeholders.hitSize')}
            component={TextField}
            fullWidth={true}
            name="hitSize"
          />
        </div>
        <div>
          <ThemeSelect />
        </div>
        <div>
          <RaisedButton
            disabled={invalid}
            label='Save'
            secondary={true}
            type="submit"
          />
        </div>
      </form>
    );
  }

}

SettingsBaseForm = reduxForm({
  form: 'settings-base',
  validate,
})(SettingsBaseForm);

SettingsBaseForm = connect(null, {
  load: pullData
})(SettingsBaseForm);

export default BaseContainer(SettingsBaseForm);
