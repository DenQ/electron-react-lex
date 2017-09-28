// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import { Link } from 'react-router-dom';
// import styles from './style.css';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Home extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <FloatingActionButton secondary={true}>
          <ContentAdd />
       </FloatingActionButton>
      </div>
    );
  }
}
