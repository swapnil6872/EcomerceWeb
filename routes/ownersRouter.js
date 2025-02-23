const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if (process.env.NODE_ENV) {
    router.post('/create', async (req, res) => {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(503).send('you dont have a access')
        }

        let { fullname, email, password } = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,

        })
        res.status(201).send('we can create new owner');
    })
}

router.get('/', (req, res) => {
    res.send('hey');
})

router.get('/admin',(req,res)=>{
    res.render('createproducts',{ success: req.flash("success") || "" })  
})

module.exports = router;