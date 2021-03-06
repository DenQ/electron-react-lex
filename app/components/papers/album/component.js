import React, { Component } from 'react';
import { Paper, RaisedButton, Popover, Menu, MenuItem } from 'material-ui';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';
import BaseComponent from 'lex/libs/base/component';
import { I18n } from 'react-redux-i18n';
import Badge from 'material-ui/Badge';

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
    top: 20,
  },
  text: {
    color: 'black',
  },
  icon: {
    play: {
      cursor: 'pointer',
      position: 'relative',
      top: 5,
      width: 60,
      height: 60,
    }
  }
};

function calculateLearning(album) {
  const { size, learned } = album;
  return Math.floor(learned * 100 / size);
}

export default class AlbumPaper extends BaseComponent {

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
    this.decorateStyle();
    const { record, handleToRun, handleToEdit, handleRemove } = this.props;
    return (
      <Paper style={styles.paper} zDepth={2} onClick={this.handlerOnClick}>
        <div style={styles.text}>
          {record.name}
        </div>

        <Badge
          badgeContent={calculateLearning(record)}
          secondary={true}
          badgeStyle={{top: 27, right: 20}}
          title="Persent learning"
        >
        <PlayIcon
          style={styles.icon.play}
          color={this.styles.palette.primary3Color}
        />
        </Badge>

        <div style={styles.menu}>
          <RaisedButton
            onClick={this.handleTouchTap}
            label={I18n.t('components.papers.album.options')}
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
              <MenuItem
                primaryText={I18n.t('components.papers.album.run')}
                onClick={handleToRun}
              />
              <MenuItem
                primaryText={I18n.t('components.papers.album.edit')}
                onClick={handleToEdit}
              />
              <MenuItem
                primaryText={I18n.t('components.papers.album.remove')}
                onClick={handleRemove}
              />
            </Menu>
          </Popover>
        </div>

      </Paper>
    );
  }
}
