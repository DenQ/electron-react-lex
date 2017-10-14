import React from 'react';
import { AppBar, IconButton } from 'material-ui';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AlbumPaper from 'lex/containers/papers/album/container';
import BaseComponent from 'lex/libs/base/component';
import MaterialSpinner from 'lex/containers/spinners/material-spinner/container';
import { I18n } from 'react-redux-i18n';

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
    const { album, spinners } = this.props;
    const { records } = album;
    const { pageContainer } = spinners;

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
          title={I18n.t('pages.list.title')}
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
          <MaterialSpinner show={pageContainer.show} />
        </div>

      </div>
    );
  }
}

export default List;
