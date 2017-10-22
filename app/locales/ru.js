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
    settings: {
      title: 'Настройки',
    },
  },
  components: {
    forms: {
      required: 'Обязательно для заполнения',
      mustBeNumber: 'Значение должно быть чисолм',
      mustBeGreaterZero: 'Значение должно быть больше 0',
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
      settings: {
        placeholders: {
          hitSize: 'Количество правильных ответов',
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
  },
  notifications: {
    removed: {
      album: 'Альбом был удален!',
      word: 'Слово было удалено!',
    },
    locate: {
      change: 'Локализация была изменена!'
    },
    theme: {
      change: 'Тема оформления была изменена!'
    },
  },

};
