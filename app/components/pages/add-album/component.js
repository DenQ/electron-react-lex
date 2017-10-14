import React from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
// import { formValueSelector } from 'redux-form';
import Form from 'lex/components/forms/add-album/component';
import BaseComponent from 'lex/libs/base/component';
import { I18n } from 'react-redux-i18n';

export default class AddAlbum extends BaseComponent {

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
    this.decorateStyle();
    const { forms } = this.props;
    let isValidForm = false;
    if ('addAlbum' in forms) {
      const stateForm = this.props.forms.addAlbum;
      isValidForm = !('syncErrors' in stateForm);

    }
    return (
      <div style={this.styles.body}>
        <AppBar
          title={I18n.t('pages.add.title')}
          iconElementLeft={
            <IconButton
              style={this.styles.iconButton.large}
              iconStyle={this.styles.iconButton.largeIcon}
              onClick={this.handleToList}
            >
              <NavigationClose />
            </IconButton>
          }
        />
        <div className="page-container">

          <Form />

          <RaisedButton
            label={I18n.t('pages.add.buttons.saveAndToEdit')}
            secondary={true}
            disabled={!isValidForm}
            onClick={this.handleToEdit}
          />

        </div>

      </div>
    );
  }
}
