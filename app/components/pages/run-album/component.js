import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from 'lex/styles/custom';

const styles = {
  button: {
    marginTop: 3,
    marginBottom: 3,
    height: 60,
    title: {
      fontSize: 16,
      fontWeight: 900,
    }
  }
};

export default class RunAlbum extends Component {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  componentDidMount() {
    const { match, albumsActions, runActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
    runActions.list(id);
  }

  handleSelect() {
    const { match, runActions } = this.props;
    const { id } = match.params;
    // albumsActions.get(id);
    runActions.list(id);
  }

  render() {
    const { album, run } = this.props;
    console.log(run);
    const name = (() => {
      if (album && album.record) {
        return album.record.name;
      } return '';
    })();

    const listAnswers = run.answers.map((item, index) => {
      const key = `${item.id}${index}`;
      return (<RaisedButton
        labelStyle={styles.button.title}
        onClick={this.handleSelect}
        label={item.originalWord}
        style={styles.button}
        fullWidth={true}
        primary={true}
        key={key}
      />);
    });
    const question = run.question || {originalWord: '', translateWord: ''};

    return (
      <div>
        <AppBar
          title={'Run' + ' - ' + name}
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
          <RaisedButton
            key="csdc"
            labelStyle={styles.button.title}
            label={question.translateWord}
            style={styles.button}
            secondary={true}
            fullWidth={true}
          />
          {listAnswers}
        </div>
      </div>
    );
  }
}
