export default {
  pages: {
    list: {
      title: 'List albums',
    },
    add: {
      title: 'Add album',
      buttons: {
        saveAndToEdit: 'Save & to edit'
      }
    },
    edit: {
      title: 'Edit album - %{name}'
    },
    run: {
      title: 'Testing album - %{name}'
    },
    settings: {
      title: 'Settings',
    },
  },
  components: {
    forms: {
      required: 'Required',
      mustBeNumber: 'The value must be a number',
      mustBeGreaterZero: 'Value must be greater than 0',
      addAlbum: {
        placeholders: {
          albumName: 'Album Name',
          albumDescription: 'Album Description',
        }
      },
      addWord: {
        placeholders: {
          word: 'Word',
          translate: 'Translate',
        }
      },
      settings: {
        placeholders: {
          hitSize: 'Hit size',
        }
      },
    },
    papers: {
      album: {
        options: 'Options',
        run: 'Run',
        edit: 'Edit',
        remove: 'Remove',
      }
    }
  },
  notifications: {
    removed: {
      album: 'Album was removed!',
      word: 'Word was removed!',
    },
    locate: {
      change: 'Location was changed!'
    },
    theme: {
      change: 'Theme was changed!'
    },
  },
};
