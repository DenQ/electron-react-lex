import Dexie from 'dexie';

const db = new Dexie('lex');

db.version(1).stores({
  albums: '++id,name,description,lastOpened,createdDT,default,size,learned',
  words: '++id,originalWord,translateWord,albumId,createdDT,hit',
  options: '++id,key,value',
});

export default db;
