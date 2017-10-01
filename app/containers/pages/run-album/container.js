// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from '../../../components/pages/run-album/component';
import * as urlManagerActions from '../../../actions/url-manager';

function mapStateToProps(state) {
  return {
    urlManager: state.urlManager,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    urlManagerActions: bindActionCreators(urlManagerActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
