import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import AddWordForm from 'lex/components/forms/add-word/component';
import Styles from 'lex/styles/custom';

export default class EditAlbum extends Component {
  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleToRun = this.handleToRun.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(formName) {
    const { wordsActions, forms, match, urlManagerActions } = this.props;
    const { id } = match.params;
    const state = forms[formName];
    const { values } = state;
    const payload = {
      originalWord: values.word,
      translateWord: values.translate,
      albumId: Number(id),
    }
    wordsActions.insert(payload, (dispatch, record) => {
      if (record) {
        // need reload list words
      }
    });

  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleToRun() {
    const { transitionTo } = this.props.urlManagerActions;
    const { id } = this.props.match.params;
    transitionTo(`/album-run/${id}`);
  }

  componentDidMount() {
    const { match, albumsActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
  }

  render() {
    const { album } = this.props;
    const name = (() => {
      if (album && album.record) {
        return album.record.name;
      } return '';
    })();

    return (
      <div>
        <AppBar
          title={'Edit album' + ' - ' + name}
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
        <div className="page-container">
          <AddWordForm form={'wordAdd11'} handleSave={this.handleSave} />
          <AddWordForm form={'wordAdd21'} handleSave={this.handleSave} />
        </div>
      </div>
    );
  }
}
