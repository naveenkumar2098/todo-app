const express = require('express');
const path = require('path');

const app = express();

app.use('view engine','ejs');

const PORT = process.env.PORT || 4040;

app.listen(PORT, (err) =>{
    if(err){
        console.error.bind(console, 'Problem Starting PORT');
    }
    console.log(`Server Running on ${PORT}`);
})