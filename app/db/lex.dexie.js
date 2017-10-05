import Dexie from 'dexie';

var db = new Dexie('lex');

db.version(1).stores({
  albums: '++id,name,description,lastOpened,createdDT',
  words: '++id,originalWord,translateWord,albumId',
});

export default db;
