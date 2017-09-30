// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

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
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
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
      </div>
    );
  }
}
