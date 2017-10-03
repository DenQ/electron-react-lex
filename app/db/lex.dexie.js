import Dexie from 'dexie';

var db = new Dexie('lex');

db.version(1).stores({
  albums: "++id,name,description",
});

export default db;
