import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import IconButton from 'material-ui/IconButton';
import IconSave from 'material-ui/svg-icons/navigation/check';
import IconRemove from 'material-ui/svg-icons/content/remove-circle';

const styles = {
  field: {
    width: 230,
    margin: 5,
  }
}

const validate = values => {
  const errors = {};
  if (!values.word) {
    errors.word = [];
  }
  if (!values.translate) {
    errors.translate = [];
  }
  return errors;
};

class AddWord extends React.Component {

  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Word"
            component={TextField}
            name="word"
            style={styles.field}
          />
          <Field
            placeholder="Translate"
            component={TextField}
            name="translate"
            style={styles.field}
          />
        <IconButton disabled={invalid}>
          <IconSave />
        </IconButton>
        <IconButton>
          <IconRemove />
        </IconButton>
        </div>
      </form>
    );
  }

}

export default reduxForm({
  form: 'addWord',
  validate,
})(AddWord);
