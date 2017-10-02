// @flow
import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from '../../../styles/custom'

export default class AddAlbum extends Component {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleToEdit = this.handleToEdit.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleToEdit() {
    const { insert } = this.props.albumsActions;
    insert([{
      name: 'First Album 101',
      describe: 'Describe Album 101',
    }], (dispatch, object) => {
      console.log(222, object);
      const { transitionTo } = this.props.urlManagerActions;
      transitionTo('/edit-album/1');
    });
  }

  render() {
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

        <RaisedButton
          label="Save & to edit"
          secondary={true}
          onClick={this.handleToEdit}
        />
      </div>
    );
  }
}
