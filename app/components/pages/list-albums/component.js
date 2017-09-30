// @flow
import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import { Link } from 'react-router-dom';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import { push } from 'react-router-redux'

const styles = {
  largeIcon: {
    width: 36,
    height: 36,
  },
  large: {
    // width: 48,
    // height: 48,
    padding: 1,
  },
};

class List extends Component {
  constructor(props) {
    super(props);
    this.handleToAdd = this.handleToAdd.bind(this);
  }

  handleToAdd() {
    console.log(111, this, this.props.urlManagerActions);
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
