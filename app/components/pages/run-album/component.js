// @flow
import React, { Component } from 'react';
import { AppBar, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from '../../../styles/custom'

export default class RunAlbum extends Component {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  componentDidMount() {
    const { match, albumsActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
  }

  render() {
    // const { album } = this.props;
    // console.log(111, album);
    return (
      <div>
        <AppBar
          title="Run album"
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
