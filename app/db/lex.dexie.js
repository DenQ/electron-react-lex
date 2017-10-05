import Dexie from 'dexie';

const db = new Dexie('lex');

db.version(1).stores({
  albums: '++id,name,description,lastOpened,createdDT',
  words: '++id,originalWord,translateWord,albumId',
});

export default db;
