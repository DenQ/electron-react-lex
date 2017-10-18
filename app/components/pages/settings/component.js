import React from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
// import ClearStatisticsIcon from 'material-ui/svg-icons/action/restore';
import Styles from 'lex/styles/custom';
// import RunVariableButton from 'lex/containers/buttons/run-variable/container';
import BaseComponent from 'lex/libs/base/component';
// import MaterialSpinner from 'lex/containers/spinners/material-spinner/container';
// import { I18n } from 'react-redux-i18n';
// import InfoStatistics from 'lex/containers/badges/run-statics/container';


export default class SettingsPage extends BaseComponent {

  constructor(props) {
    super(props);
    console.log(222);
    this.handleToList = this.handleToList.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  render() {
    this.decorateStyle();
    // const {  spinners } = this.props;
    // const { pageContainer } = spinners;

    return (
      <div style={this.styles.body}>
        <AppBar
          title='Settings'
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
          Settings
        </div>
      </div>
    );
  }
}
