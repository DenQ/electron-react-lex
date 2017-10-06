import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as urlManagerActions from 'lex/actions/url-manager';
import * as albumsActions from 'lex/actions/albums';
import * as wordsActions from 'lex/actions/word';

function mapStateToProps(state) {
  return {
    urlManager: state.urlManager,
    album: state.album,
    word: state.word,
    forms: state.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    urlManagerActions: bindActionCreators(urlManagerActions, dispatch),
    albumsActions: bindActionCreators(albumsActions, dispatch),
    wordsActions: bindActionCreators(wordsActions, dispatch),
  };
}

export default function(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
