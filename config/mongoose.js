const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo_list_db)');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error coonecting to db'));

db.once('open', ()=>{
    console.log('Successfully connected to database');
});

