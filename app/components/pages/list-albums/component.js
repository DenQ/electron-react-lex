import React, { Component } from 'react';
import { AppBar, IconButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AlbumPaper from 'lex/containers/papers/album/container';
// import Styles from 'lex/styles/custom';
// import getTheme from 'lex/libs/get-theme';
//
// function decorateStyle() {
//   const { options } = this.props;
//   const filtered = options.records.filter(item => item.key === 'theme');
//   const codeTheme = filtered.length > 0 ? filtered[0].value : null;
//   if (codeTheme) {
//     const theme = getTheme(codeTheme);
//     Styles.body.backgroundColor = theme.palette.primary2Color
//
//   }
// }

import BaseComponent from 'lex/libs/base/component';

class List extends BaseComponent {

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

  componentWillMount() {
    const { defaultAlbumActions } = this.props;
    defaultAlbumActions.run();
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    this.decorateStyle();
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
      <div style={this.styles.body}>
        <AppBar
          title="List albums"
          iconElementRight={
            <IconButton
              style={this.styles.iconButton.large}
              iconStyle={this.styles.iconButton.largeIcon}
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
