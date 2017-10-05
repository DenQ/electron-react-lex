import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import { formValueSelector } from 'redux-form';
import Styles from 'lex/styles/custom';
import Form from 'lex/forms/add-album/component';

export default class AddAlbum extends Component {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleToEdit = this.handleToEdit.bind(this);
  }

  handleToList() {
    const { urlManagerActions } = this.props;
    urlManagerActions.transitionTo('/');
  }

  handleToEdit() {
    const { insert } = this.props.albumsActions;
    // const selector = formValueSelector('addAlbum');
    // const values = selector(state, 'name', 'description');
    const state = this.props.forms.addAlbum;
    const { values } = state;

    insert(values, (dispatch, record) => {
      if (record) {
        const { transitionTo } = this.props.urlManagerActions;
        transitionTo(`/edit-album/${record.id}`);
      }
    });
  }

  render() {
    const { forms } = this.props;
    let isValidForm = false;
    if ('addAlbum' in forms) {
      const stateForm = this.props.forms.addAlbum;
      // const isValid = typeof(stateForm.syncErrors) === undefined;
      isValidForm = !('syncErrors' in stateForm);

    }
    return (
      <div>
        <AppBar
          title="Add album"
          iconElementLeft={
            <IconButton
              style={Styles.iconButton.large}
              iconStyle={Styles.iconButton.largeIcon}
              onClick={this.handleToList}
            >
              <NavigationClose />
            </IconButton>
          }
        />
        <div className="page-container">

          <Form />

          <RaisedButton
            label="Save & to edit"
            secondary={true}
            disabled={!isValidForm}
            onClick={this.handleToEdit}
          />

        </div>

      </div>
    );
  }
}
