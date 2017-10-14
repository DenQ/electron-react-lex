export default {
  pages: {
    list: {
      title: 'Список альбомов',
    },
    add: {
      title: 'Добавление альбома',
      buttons: {
        saveAndToEdit: 'Сохранить и редактировать'
      }
    },
    edit: {
      title: 'Редактирование - %{name}'
    },
    run: {
      title: 'Тестирование - %{name}'
    },
  },
  components: {
    forms: {
      required: 'Обязательно для заполнения',
      addAlbum: {
        placeholders: {
          albumName: 'Название Альбома',
          albumDescription: 'Описание Альбома',
        }
      },
      addWord: {
        placeholders: {
          word: 'Слово',
          translate: 'Перевод',
        }
      },
    },
    papers: {
      album: {
        options: 'Управление',
        run: 'Тестировать',
        edit: 'Редактировать',
        remove: 'Удалить',
      }
    }
  }
};
