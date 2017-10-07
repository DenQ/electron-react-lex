import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import { pullData } from 'lex/actions/self-form';

const data = {
  firstName: 'Jane',
}

let InitializeFromStateForm = props => {
  const {handleSubmit, load, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>Load Account</button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize: true,
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.exampleForm.data // pull initial values from account reducer
  }),
  {
    load: pullData
  } // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm
