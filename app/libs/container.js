import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as urlManagerActions from 'lex/actions/url-manager';
import * as albumsActions from 'lex/actions/albums';
import * as wordsActions from 'lex/actions/words';
import * as runActions from 'lex/actions/run';
import * as selfFormActions from 'lex/actions/self-form';
import * as defaultAlbumActions from 'lex/actions/default-album';
import * as optionsActions from 'lex/actions/options';

function mapStateToProps(state) {
  return {
    urlManager: state.urlManager,
    album: state.album,
    word: state.word,
    run: state.run,
    forms: state.form,
    options: state.options,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    urlManagerActions: bindActionCreators(urlManagerActions, dispatch),
    albumsActions: bindActionCreators(albumsActions, dispatch),
    wordsActions: bindActionCreators(wordsActions, dispatch),
    runActions: bindActionCreators(runActions, dispatch),
    selfFormActions: bindActionCreators(selfFormActions, dispatch),
    defaultAlbumActions: bindActionCreators(defaultAlbumActions, dispatch),
    optionsActions: bindActionCreators(optionsActions, dispatch),
  };
}

export default function(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
