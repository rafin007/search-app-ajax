const express = require('express');
var {mongoose} = require.main.require('./db/mongoose');
var {User} = require.main.require('./models/userModel');
var router = express.Router();

router.get('/create', (req, res) => {
    res.render('test');
});

router.post('/create', (req, res) => {
    var user =  new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        gender: req.body.gender,
        age: req.body.age
    });
    // console.log(user);
    // res.send(user);
    user.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });

});

router.get('/users', (req, res) => {
    User.find().then((users) => {
        if(!users){
            res.send('No users found!');
        }
        else {
            res.render('users', {usrs: users});
        }
    }, (err) => {
        res.status(400).send(err);
    });
});

router.get('/users/search', (req, res) => {
    
});

module.exports = router;
