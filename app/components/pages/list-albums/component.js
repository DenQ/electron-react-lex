import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AlbumPaper from 'lex/containers/papers/album/container';
import Styles from 'lex/styles/custom';

class List extends Component {

  constructor(props) {
    super(props);
    this.handleToAdd = this.handleToAdd.bind(this);
    this.handleToRun = this.handleToRun.bind(this);
    this.handleToEdit = this.handleToEdit.bind(this);
  }

  getList() {
    this.props.albumsActions.list();
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

  handleRemoveAlbum(item) {
    const { albumsActions } = this.props;
    albumsActions.remove(item, this.getList.bind(this));
  }

  componentDidMount() {
    this.getList();
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
          handleRemove={this.handleRemoveAlbum.bind(this, item)}
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
