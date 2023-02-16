const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/TODOLIST');
mongoose.connect(`${process.env.Db_uri}`);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connection to db'));
db.once('open',function(){
    console.log('successfully connected to the database');

});
