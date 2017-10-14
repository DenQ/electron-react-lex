import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import IconButton from 'material-ui/IconButton';
import IconSave from 'material-ui/svg-icons/navigation/check';
import IconRemove from 'material-ui/svg-icons/content/remove-circle';
import { connect } from 'react-redux';
import { pullData } from 'lex/actions/form-add-word';
import BaseComponent from 'lex/libs/base/component';
import BaseContainer from 'lex/libs/container';
import { I18n } from 'react-redux-i18n';

const styles = {
  field: {
    width: 223,
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

class AddWord extends BaseComponent {

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSave() {
    const { handleSave, form, record, reset } = this.props;
    if (handleSave && form) {
      handleSave(form, record);
    }
    if (!record) {
      reset();
    }
  }

  handleRemove() {
    const { handleRemove, record } = this.props;
    if (handleRemove && record) {
      handleRemove(record);
    }
  }

  componentWillMount() {
    const { record, load, form } = this.props;
    if (form, record) {
      load(form, 'word', record.originalWord);
      load(form, 'translate', record.translateWord);
    }
  }

  render() {
    this.decorateStyle();
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder={I18n.t('components.forms.addWord.placeholders.word')}
            component={TextField}
            name="word"
            style={styles.field}
          />
          <Field
            placeholder={I18n.t('components.forms.addWord.placeholders.translate')}
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

          <IconButton
            onClick={this.handleRemove}
          >
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

export default BaseContainer(AddWord);
