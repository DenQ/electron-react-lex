import React, { Component } from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

class AddAlbum extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
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

// <div>
// <button type="submit" disabled={pristine || submitting}>Submit</button>
// <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
// </div>
export default reduxForm({
  form: 'add-album',
})(AddAlbum);
