import React from 'react';
import { AppBar, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import ToRunIcon from 'material-ui/svg-icons/av/play-circle-filled';
import Styles from 'lex/styles/custom';
import AddWordForm from 'lex/components/forms/add-word/component';
import BaseComponent from 'lex/libs/base/component';
import MaterialSpinner from 'lex/containers/spinners/material-spinner/container';
import { I18n } from 'react-redux-i18n';

const nameMethods = [
  'handleToList', 'handleToRun', 'handleSave',
  'handleRemove', 'callbackList'
];

export default class EditAlbum extends BaseComponent {
  constructor(props) {
    super(props);
    nameMethods.forEach((methodName) => {
      this[methodName] = this[methodName].bind(this);
      console.log(methodName, this[methodName]);
    });
  }

  getListWords(id) {
    const { wordsActions } = this.props;
    wordsActions.list(id);
  }

  callbackList(dispatch, record) {
    if (record) {
      const {  match } = this.props;
      const { id } = match.params;
      this.getListWords(id);
    }
  }

  handleSave(formName, initialRecord) {
    const { wordsActions, forms, match } = this.props;
    const { id } = match.params;
    const state = forms[formName];
    const { values } = state;
    const payload = {
      originalWord: values.word,
      translateWord: values.translate,
      albumId: Number(id),
    }
    if (initialRecord) {
      wordsActions.update(initialRecord.id, payload, this.callbackList)
    } else {
      wordsActions.insert(payload, this.callbackList);
    }
  }

  handleRemove(record) {
    const { wordsActions } = this.props;
    wordsActions.remove(record.id, this.callbackList);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleToRun() {
    const { urlManagerActions } = this.props;
    const { id } = this.props.match.params;
    urlManagerActions.transitionTo(`/run-album/${id}`);
  }

  componentDidMount() {
    const { match, albumsActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
    this.getListWords(id);
  }

  componentWillUnmount() {
    const { wordsActions } = this.props;
    wordsActions.clearState();
  }

  render() {
    this.decorateStyle();
    const { album, word, match, spinners } = this.props;
    const { pageContainer } = spinners;
    const { id } = match.params;
    const words = word.records;
    const name = (() => {
      if (album && album.record) {
        return album.record.name;
      } return '';
    })();

    const listForm = words.map((item) => {
      const formName = `wordAdd${id}${item.id}`;
      return (
        <AddWordForm
          key={formName}
          record={item}
          form={formName}
          handleSave={this.handleSave}
          handleRemove={this.handleRemove}
        />
      );
    });

    return (
      <div style={this.styles.body}>
        <AppBar
          title={I18n.t('pages.edit.title', { name })}
          iconElementLeft={
            <IconButton
              style={Styles.iconButton.large}
              iconStyle={Styles.iconButton.largeIcon}
              onClick={this.handleToList}
            >
              <NavigationClose />
            </IconButton>
          }
          iconElementRight={
            <IconButton
              style={Styles.iconButton.large}
              iconStyle={Styles.iconButton.largeIcon}
              onClick={this.handleToRun}
              title="Testing this album"
            >
              <ToRunIcon />
            </IconButton>

          }
        />
        <div className="page-container">
          <AddWordForm
            key={'create-word'}
            form={'createWord'}
            handleSave={this.handleSave}
          />
          {listForm}
          <MaterialSpinner show={pageContainer.show} />
        </div>
      </div>
    );
  }
}
