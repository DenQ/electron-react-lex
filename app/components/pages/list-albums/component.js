// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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

class List extends Component {

  constructor(props) {
    super(props);
    this.handleToAdd = this.handleToAdd.bind(this);
  }

  handleToAdd() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/add-album');
  }

  render() {
    return (
      <div>
        <AppBar
          title="List albums"
          iconElementRight={
            <IconButton
              style={styles.large}
              iconStyle={styles.largeIcon}
              onClick={this.handleToAdd}
            >
              <AddCircle />
            </IconButton>
          }
        />
      </div>
    );
  }
}
export default List;
