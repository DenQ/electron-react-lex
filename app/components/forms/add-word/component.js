import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import IconButton from 'material-ui/IconButton';
import IconSave from 'material-ui/svg-icons/navigation/check';
import IconRemove from 'material-ui/svg-icons/content/remove-circle';
import { connect } from 'react-redux';
import { pullData } from 'lex/actions/form-add-word';

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

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const { handleSave, form } = this.props;
    if (handleSave && form) {
      handleSave(form);
    }
  }
  componentWillMount() {
    const { record, load, form } = this.props;
    if (form, record.id) {
      load(form, 'word', record.originalWord);
      load(form, 'translate', record.translateWord);
    }
  }

  render() {
    const { handleSubmit, invalid, record } = this.props;
    return (
      <form onSubmit={handleSubmit} key={record.id}>
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

          <IconButton
            onClick={this.handleSave}
            disabled={invalid}
          >
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

AddWord = reduxForm({
  enableReinitialize: true,
  form: 'addWord',
  validate,
})(AddWord);

AddWord = connect(null, {
  load: pullData
})(AddWord);

export default AddWord;
