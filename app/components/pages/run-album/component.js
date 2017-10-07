import React, { Component } from 'react';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import Styles from 'lex/styles/custom';

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
    const { match, albumsActions } = this.props;
    const { id } = match.params;
    albumsActions.get(id);
  }

  render() {
    const { album } = this.props;
    const name = (() => {
      if (album && album.record) {
        return album.record.name;
      } return '';
    })();

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
            labelStyle={styles.button.title}
            style={styles.button}
            label="World"
            secondary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Мир"
            primary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Цвет"
            primary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Орех"
            primary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Мир"
            primary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Цвет"
            primary={true}
            fullWidth={true}
          />
          <RaisedButton
            labelStyle={styles.button.title}
            style={styles.button}
            label="Орех"
            primary={true}
            fullWidth={true}
          />
        </div>
      </div>
    );
  }
}
