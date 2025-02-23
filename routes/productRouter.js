const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');


router.post('/create',upload.single('image'),(req,res)=>{
    res.send('hey');
})

module.exports = router;