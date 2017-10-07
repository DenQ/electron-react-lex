export function pullData(formName, fieldName, value) {
  return (dispatch) => {
    dispatch({
      type: '@@redux-form/CHANGE',
      meta: {
       form: formName,
       field: fieldName,
      },
      payload: value,
    });
  };
}
