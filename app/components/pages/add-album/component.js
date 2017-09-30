// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Save from 'material-ui/svg-icons/content/save';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  largeIcon: {
    width: 36,
    height: 36,
  },
  large: {
    padding: 1,
  },
};


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
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/edit-album/1');
  }

  render() {
    return (
      <div>
        <AppBar
          title="Add album"
          iconElementLeft={
            <IconButton
              style={styles.large}
              iconStyle={styles.largeIcon}
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
