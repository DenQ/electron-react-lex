import React, { Component } from 'react';
import { Paper } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  paper: {
    width: 167  ,
    height: 165,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'silver',
  },
  menu: {
    position: 'relative',
    top: 118,
  },
  text: {
    color: 'black',
  }
};

export default class AlbumPaper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handlerOnClick = this.handlerOnClick.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap = (event) => {
    event.stopPropagation();
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


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

        <div style={styles.menu}>
          <RaisedButton
            onClick={this.handleTouchTap}
            label="Click me"
            primary={true}
            fullWidth={true}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Run" />
              <MenuItem primaryText="Edit" />
              <MenuItem primaryText="Remove" />
            </Menu>
          </Popover>
        </div>

      </Paper>
    );
  }
}
