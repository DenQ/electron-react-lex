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
  },
  components: {
    forms: {
      required: 'Required',
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
    },
    papers: {
      album: {
        options: 'Options',
        run: 'Run',
        edit: 'Edit',
        remove: 'Remove',
      }
    }
  }
};
