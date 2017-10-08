import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from 'lex/styles/custom';
import RunVariableButton from 'lex/containers/buttons/run-variable/container';

const styles = {
  button: {
    marginTop: 3,
    marginBottom: 3,
    height: 60,
    title: {
      fontSize: 16,
      fontWeight: 900,
      color: 'white',
      textTransform: 'uppercase',
    }
  }
};

export default class RunAlbum extends Component {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
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

  render() {
    const { album, run, match } = this.props;
    const name = (() => {
      if (album && album.record) {
        return album.record.name;
      } return '';
    })();

    const listAnswers = run.answers.map((item, index) => {
      const key = `item-${item.id}${index}`;
      return (<RunVariableButton
        record={item}
        index={index}
        match={match}
        key={key}
      />);
    });
    const question = run.question || {originalWord: '', translateWord: ''};
    const title = question.translateWord;

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
            style={styles.button}
            secondary={true}
            fullWidth={true}
          >
            <span style={styles.button.title}>{title}</span>
          </RaisedButton>
          {listAnswers}
        </div>
      </div>
    );
  }
}
