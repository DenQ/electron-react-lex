import zango from 'zangodb';

export default new zango.Db('lex', {
  albums: ['name', 'description', 'lastOpenedDT', 'createdDT']
});
