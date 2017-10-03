// @flow
import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Styles from '../../../styles/custom'
import Paper from 'material-ui/Paper';

const style = {
  width: 172,
  height: 172,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

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

  componentDidMount() {
    // get list albums
    this.props.albumsActions.get();
  }

  render() {
    const { records } = this.props.album;

    const list = records.map((item) => {
      return (
        <Paper style={style} zDepth={2} key={item.id}>
          
        </Paper>
      );
    });


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

        <div className="page-container">
          {list}
        </div>

      </div>
    );
  }
}
// <RaisedButton
// label="Run"
// secondary={true}
// onClick={this.handleToRun}
// />
export default List;
