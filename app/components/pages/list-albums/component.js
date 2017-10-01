// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RaisedButton from 'material-ui/RaisedButton';
import Styles from '../../../styles/custom.js'

class List extends Component {

  constructor(props) {
    super(props);
    this.handleToAdd = this.handleToAdd.bind(this);
    this.handleToRun = this.handleToRun.bind(this);
  }

  handleToAdd() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/add-album');
  }

  handleToRun() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/run-album/1');
  }

  render() {
    return (
      <div>
        <AppBar
          title="List albums"
          iconElementRight={
            <IconButton
              style={Styles.iconButton.large}
              iconStyle={Styles.iconButton.largeIcon}
              onClick={this.handleToAdd}
            >
              <AddCircle />
            </IconButton>
          }
        />
        <RaisedButton
          label="Run"
          secondary={true}
          onClick={this.handleToRun}
        />
      </div>
    );
  }
}
export default List;
