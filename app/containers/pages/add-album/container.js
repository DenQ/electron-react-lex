// !@flow
import React from 'react';
import Component from '../../../components/pages/add-album/component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as urlManagerActions from '../../../actions/url-manager';
import * as albumsActions from '../../../actions/albums';

function mapStateToProps(state) {
  return {
    urlManager: state.urlManager,
    albums: state.albums,
    forms: state.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    urlManagerActions: bindActionCreators(urlManagerActions, dispatch),
    albumsActions: bindActionCreators(albumsActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
