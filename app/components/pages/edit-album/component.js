// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RaisedButton from 'material-ui/RaisedButton';
import Styles from '../../../styles/custom.js'

export default class EditAlbum extends Component {
  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleToRun = this.handleToRun.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleToRun() {
    const { transitionTo } = this.props.urlManagerActions;
    const { id } = this.props.match.params;
    transitionTo(`/album-run/${id}`);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Edit album"
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
          label="Save & Run"
          secondary={true}
          onClick={this.handleToRun}
        />
      </div>
    );
  }
}
