  // @flow
  import React, { Component } from 'react';
  import AppBar from 'material-ui/AppBar';
  import IconButton from 'material-ui/IconButton';
  import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
  import AddCircle from 'material-ui/svg-icons/content/add-circle';
  import Styles from '../../../styles/custom.js'

  export default class EditAlbum extends Component {
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
        </div>
      );
    }
  }
