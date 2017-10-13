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

const initialState = {
  disabled: false,
}

export default class RunVariable extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = initialState;
  }

  handleSelect() {
    const { match, runActions, run, record } = this.props;
    const questionId = Number(run.question.id);
    const recordId = Number(record.id);
    if (recordId === questionId) {
      const { id } = match.params;
      runActions.clearState();
      runActions.list(id);
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { index, record, run } = this.props;
    const title = !run.vector ? record.translateWord : record.originalWord;
    const key = `${record.id}${index}`;
    return (<RaisedButton
      labelStyle={styles.button.title}
      disabled={this.state.disabled}
      onClick={this.handleSelect}
      style={styles.button}
      fullWidth={true}
      primary={true}
      label={title}
      key={key}
    />);

  }

}
