const mongoose = require('mongoose');

//const connetDB = mongoose.connect(process.env.CONN_STR + '/test')
const connetDB = mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!!!'))
  .catch((e)=>{
    console.log('Database no conected', e)
  });

module.exports = connetDB;