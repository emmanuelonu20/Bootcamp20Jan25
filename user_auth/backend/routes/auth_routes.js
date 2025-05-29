const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer  = require('multer');

//Configure image storage location
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

router.post('/register', upload.single('profile_image'), function(req, res){
    const userData = req.body;

    bcrypt.hash(userData.password, 10, (err, hash) => {
        userData.password = hash; //replace the clear text password with the hashed password.

        if(req.file){
            userData.image = req.file.filename;
        }

        //Save user data to database.
        User.create(userData).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    });    
});

router.post('/login', function(req, res){
    const {email, password} = req.body;

    //Find user based on their email address
    User.findOne({where: {email}}).then((result) => {
        //Check if email exist in database table.
        if(!result){
            res.status(404).send('User not found');
            return;
        }

        //Compare password
        bcrypt.compare(password, result.password, (err, match) => {
            if (!match) {
                return res.status(401).send('Authentication failed');
            }

            const token = jwt.sign({ userId: result.id }, '123456', {expiresIn: '1h'}); //Generate authentication token
            res.status(200).send({token});
        });        
    });
});

module.exports = router;