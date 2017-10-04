import React, { Component } from 'react';
import { Paper, RaisedButton, Popover, Menu, MenuItem } from 'material-ui';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';
import { indigo300 } from 'material-ui/styles/colors';

const styles = {
  paper: {
    width: 167  ,
    height: 167,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
  },
  menu: {
    position: 'relative',
    top: 50,
  },
  text: {
    color: 'black',
  },
  icon: {
    play: {
      cursor: 'pointer',
      position: 'relative',
      top: 20,
      width: 60,
      height: 60,
    }
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

        <PlayIcon style={styles.icon.play} color={indigo300}/>

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
