import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Styles from '../../../styles/custom';
import AlbumPaper from '../../../containers/papers/album/container';

const styles = {
  container: {
    overflowX: 'auto',
    height: 700,
  }
}

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
        <AlbumPaper key={item.id} record={item}/>
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

        <div className="page-container" style={styles.container}>
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
