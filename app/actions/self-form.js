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
