import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as urlManagerActions from 'lex/actions/url-manager';
import * as albumsActions from 'lex/actions/albums';
import * as wordsActions from 'lex/actions/words';
import * as runActions from 'lex/actions/run';
import * as selfFormActions from 'lex/actions/self-form';

function mapStateToProps(state) {
  return {
    urlManager: state.urlManager,
    album: state.album,
    word: state.word,
    run: state.run,
    forms: state.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    urlManagerActions: bindActionCreators(urlManagerActions, dispatch),
    albumsActions: bindActionCreators(albumsActions, dispatch),
    wordsActions: bindActionCreators(wordsActions, dispatch),
    runActions: bindActionCreators(runActions, dispatch),
    selfFormActions: bindActionCreators(selfFormActions, dispatch),
  };
}

export default function(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
