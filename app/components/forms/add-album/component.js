import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { I18n } from 'react-redux-i18n';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = I18n.t('components.forms.required');
  }
  return errors;
};

class AddAlbum extends BaseComponent {

  render() {
    this.decorateStyle();
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
          <div>
            <Field
              placeholder={I18n.t('components.forms.addAlbum.placeholders.albumName')}
              component={TextField}
              fullWidth={true}
              name="name"
            />
          </div>
          <div>
            <Field
              placeholder={I18n.t('components.forms.addAlbum.placeholders.albumDescription')}
              component={TextField}
              name="description"
              fullWidth={true}
              rows={2}
            />
          </div>
      </form>
    );
  }

}

AddAlbum = reduxForm({
  form: 'addAlbum',
  validate,
})(AddAlbum);

export default BaseContainer(AddAlbum);
