import React, { Component } from 'react';
import Badge from 'material-ui/Badge';

export default class RunVariable extends Component {

  render() {
    const { statisticsAlbum } = this.props;
    return (
      <span>
        <Badge
          badgeContent={statisticsAlbum.learned}
          primary={true}
          secondary={false}
          badgeStyle={{top: 5, right: 1}}
          title="Learned words"
        />

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
