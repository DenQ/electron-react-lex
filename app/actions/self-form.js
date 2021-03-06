const LOAD = 'redux-form-examples/account/LOAD';

export function change(formName, fieldName, value) {
  return (dispatch) => {
    dispatch({
      type: '@@redux-form/CHANGE',
      meta: {
        form: formName,
        field: fieldName,
        touch: false,
        persistentSubmitErrors: false,
      },
      payload: value,
    })
  };
}

export function pullData(data) {
  return (dispatch) => {
    dispatch({
      type: LOAD,
      data,
    })
  };
}
