const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index');
})

router.post('/todo', (req,res)=>{
    
})

module.exports = router;