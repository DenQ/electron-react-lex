import React from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import ClearStatisticsIcon from 'material-ui/svg-icons/action/restore';
import Styles from 'lex/styles/custom';
import RunVariableButton from 'lex/containers/buttons/run-variable/container';
import BaseComponent from 'lex/libs/base/component';
import MaterialSpinner from 'lex/containers/spinners/material-spinner/container';
import { I18n } from 'react-redux-i18n';
import InfoStatistics from 'lex/containers/badges/run-statics/container';

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

export default class RunAlbum extends BaseComponent {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleResetStatistics = this.handleResetStatistics.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleResetStatistics() {
    const { match, albumsActions, runActions } = this.props;
    const { id } = match.params;
    albumsActions
      .resetStatistics(id)
      .then(()=> {
        return runActions.list(id);
      })
      .then((/*results*/)=>{
        albumsActions.pullStatistics(id);
      });
  }

  componentDidMount() {
    const { match, albumsActions, runActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
    runActions.list(id)
      .then(() => {
        albumsActions.pullStatistics(id);
      })
  }

  componentWillUnmount() {
    const { runActions, albumsActions } = this.props;
    runActions.clearState();
    albumsActions.clearStatistics();
  }

  render() {
    this.decorateStyle();
    const { album, run, match, spinners } = this.props;
    const { pageContainer } = spinners;
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
    const title = run.vector ? question.translateWord : question.originalWord;

    return (
      <div style={this.styles.body}>
        <AppBar
          title={I18n.t('pages.run.title', { name })}
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
            <div>
              <InfoStatistics />
              <IconButton
                style={Styles.iconButton.large}
                iconStyle={Styles.iconButton.largeIcon}
                onClick={this.handleResetStatistics}
                title="Clear statistics"
              >
                <ClearStatisticsIcon />
              </IconButton>
            </div>
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
          <MaterialSpinner show={pageContainer.show} />
        </div>
      </div>
    );
  }
}
