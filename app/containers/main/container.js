// @flow
import React from 'react';
import Component from '../../components/main/component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
