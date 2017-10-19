import React from 'react';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { pullData } from 'lex/actions/form-setup';

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

function getValue(data, key){
  const filtered = data.filter(item => item.key === key);
  if (filtered.length) {
    return filtered[0];
  }
}

class SettingsBaseForm extends BaseComponent {

  componentDidMount() {
    const { data, load, form } = this.props;
    if (form, data) {
      const hitSize = getValue(data, 'hitSize');
      if (hitSize) {
        load('settings-base', 'hitSize', hitSize.value);
      }
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
