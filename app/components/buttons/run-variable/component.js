import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

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

export default class RunVariable extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    const { match, runActions } = this.props;
    const { id } = match.params;
    runActions.list(id);
  }

  render() {
    const { index, record } = this.props;
    const key = `${record.id}${index}`;
    return (<RaisedButton
      labelStyle={styles.button.title}
      onClick={this.handleSelect}
      label={record.originalWord}
      style={styles.button}
      fullWidth={true}
      primary={true}
      key={key}
    />);

  }

}
