import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
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
              placeholder="Album Name"
              component={TextField}
              fullWidth={true}
              name="name"
            />
          </div>
          <div>
            <Field
              placeholder="Album Description"
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
