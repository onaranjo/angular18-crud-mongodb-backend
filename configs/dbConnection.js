const mongoose = require('mongoose');

//const connetDB = mongoose.connect(process.env.CONN_STR + '/test')
const connetDB = mongoose.connect('mongodb://100.20.92.101:27017/test')
  .then(() => console.log('Connected!!!'))
  .catch((e)=>{
    console.log('Database no conected', e)
  });

module.exports = connetDB;