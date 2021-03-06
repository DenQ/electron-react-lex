import React from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
// import ClearStatisticsIcon from 'material-ui/svg-icons/action/restore';
import Styles from 'lex/styles/custom';
// import RunVariableButton from 'lex/containers/buttons/run-variable/container';
import BaseComponent from 'lex/libs/base/component';
// import MaterialSpinner from 'lex/containers/spinners/material-spinner/container';
import { I18n } from 'react-redux-i18n';
import SettingBaseForm from 'lex/components/forms/settings/base/component';
import renderApp from '../../../render-app';

export default class SettingsPage extends BaseComponent {

  constructor(props) {
    super(props);
    this.handleToList = this.handleToList.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleToList() {
    const { transitionTo } = this.props.urlManagerActions;
    transitionTo('/');
  }

  handleSave(event) {
    event.preventDefault();
    const { optionsActions, forms } = this.props;
    const state = forms['settings-base'];
    const fields = state.values;
    const queries = [];
    Object.keys(fields).forEach((key) => {
      const value = fields[key];
      if (value) {
        const query = optionsActions.setOption({ key, value });
        queries.push(query);
      }
    });
    Promise.all(queries)
      .then(() => {
        console.log('success');
        renderApp();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    this.decorateStyle();
    const { options } = this.props;
    return (
      <div style={this.styles.body}>
        <AppBar
          title={I18n.t('pages.settings.title')}
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
          <SettingBaseForm
            handleSubmit={this.handleSave}
            data={options.records}
          />
        </div>
      </div>
    );
  }
}
