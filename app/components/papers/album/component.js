import React, { Component } from 'react';
import { Paper } from 'material-ui';

const styles = {
  paper: {
    width: 172,
    height: 172,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  },
  text: {
    color: 'black',
  }
};

export default class AlbumPaper extends Component {

  constructor(props) {
    super(props);
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  handlerOnClick() {
    const { record, urlManagerActions } = this.props;
    urlManagerActions.transitionTo(`/run-album/${record.id}`);
  }

  render() {
    const { record } = this.props;
    return (
      <Paper style={styles.paper} zDepth={2} onClick={this.handlerOnClick}>
        <div style={styles.text}>
          {record.name}
        </div>
      </Paper>
    );
  }
}
