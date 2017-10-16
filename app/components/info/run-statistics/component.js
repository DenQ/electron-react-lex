import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
// import { RaisedButton } from 'material-ui';

export default class RunVariable extends Component {

  constructor(props) {
    super(props);
    console.log(111, this.props);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.state = initialState;
  }


  render() {
    const { statisticsAlbum } = this.props;
    return (
      <span>
        <Badge
          badgeContent={statisticsAlbum.learned}
          secondary={true}
          badgeStyle={{top: 5, right: 1}}
          title="Learned words"
        >
        </Badge>

        <Badge
          badgeContent={statisticsAlbum.length}
          secondary={true}
          badgeStyle={{top: 5, right: 1}}
          title="Size album"
        />
      </span>

    );
  }

}
