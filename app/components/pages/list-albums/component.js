import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Styles from '../../../styles/custom';
import AlbumPaper from '../../../containers/papers/album/container';

class List extends Component {

  constructor(props) {
    super(props);
    this.handleToAdd = this.handleToAdd.bind(this);
    this.handleToRun = this.handleToRun.bind(this);
    this.handleToEdit = this.handleToEdit.bind(this);
  }

  handleToAdd() {
    const { urlManagerActions } = this.props;
    urlManagerActions.transitionTo('/add-album');
  }

  handleToRun(item) {
    const { urlManagerActions } = this.props;
    urlManagerActions.transitionTo(`/run-album/${item.id}`);
  }

  handleToEdit(item) {
    const { urlManagerActions } = this.props;
    urlManagerActions.transitionTo(`/edit-album/${item.id}`);
  }

  componentDidMount() {
    // get list albums
    this.props.albumsActions.get();
  }

  render() {
    const { records } = this.props.album;

    const list = records.map((item) => {
      return (
        <AlbumPaper
          key={item.id}
          record={item}
          handleToRun={this.handleToRun.bind(this, item)}
          handleToEdit={this.handleToEdit.bind(this, item)}
        />
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

export default List;
