const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({
    extended : false
}));

app.use(express.static('assets'));

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 4040;

app.listen(PORT, (err) =>{
    if(err){
        console.error.bind(console, 'Problem Starting PORT');
    }
    console.log(`Server Running on ${PORT}`);
})