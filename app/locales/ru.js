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
