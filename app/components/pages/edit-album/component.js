import React from 'react';
import { AppBar, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from 'lex/styles/custom';
import AddWordForm from 'lex/components/forms/add-word/component';
import BaseComponent from 'lex/libs/base/component';

const nameMethods = [
  'handleToList', 'handleToRun', 'handleSave',
  'handleRemove', 'callbackList'
];

export default class EditAlbum extends BaseComponent {
  constructor(props) {
    super(props);
    nameMethods.forEach((methodName) => {
      this[methodName] = this[methodName].bind(this);
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
    const { transitionTo } = this.props.urlManagerActions;
    const { id } = this.props.match.params;
    transitionTo(`/album-run/${id}`);
  }

  componentDidMount() {
    const { match, albumsActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
    this.getListWords(id);
  }

  render() {
    this.decorateStyle();
    const { album, word, match } = this.props;
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
          <AddWordForm
            key={'create-word'}
            form={'createWord'}
            handleSave={this.handleSave}
          />
          {listForm}
        </div>
      </div>
    );
  }
}
