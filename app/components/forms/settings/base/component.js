import React from 'react';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { I18n } from 'react-redux-i18n';

const validate = values => {
  const errors = {};
  if (!values.hitSize) {
    errors.hitSize = I18n.t('components.forms.required');
  }
  return errors;
};

class SettingsBaseForm extends BaseComponent {

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

export default BaseContainer(SettingsBaseForm);
