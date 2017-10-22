import React from 'react';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { pullData } from 'lex/actions/form-setup';
import fillData from 'lex/utils/object-fill-from-data';
import themes from 'lex/constants/menu-themes';
import locates from 'lex/constants/menu-locates';
import SelectCustom from 'lex/containers/selects/custom/container';

const { remote } = require('electron');
const currentWindow = remote.getCurrentWindow();

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

function getCode(args) {
  return Object.keys(args)
    .filter(item => !isNaN(Number(item)))
    .map(item => args[item])
    .join('');
}

class SettingsBaseForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeLocate = this.handleChangeLocate.bind(this);
  }

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

  handleChangeTheme(e) {
    const code = getCode(e);
    currentWindow.send('change-theme', { code });
  }

  handleChangeLocate(e) {
    const code = getCode(e);
    currentWindow.send('change-locate', { code });
  }

  render() {
    this.decorateStyle();
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <SelectCustom
            fieldName="theme"
            fullWidth={true}
            hintText="Theme"
            floatingLabelText="Theme"
            data={themes}
            handleChange={this.handleChangeTheme}
          />
        </div>
        <div>
          <SelectCustom
            fieldName="locate"
            fullWidth={true}
            hintText="Locate"
            floatingLabelText="Locate"
            data={locates}
            handleChange={this.handleChangeLocate}
          />
        </div>
        <div>
          <Field
            placeholder={I18n.t('components.forms.settings.placeholders.hitSize')}
            floatingLabelText="Hit size"
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

export default BaseContainer(reduxForm({
  form: 'settings-base',
  validate,
})(connect(null, {
  load: pullData,
})(SettingsBaseForm)));
