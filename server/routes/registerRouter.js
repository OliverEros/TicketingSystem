var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var User = require('../schemas/userSchema');



/**
 * TODO
 * => Create user
 * => Check if exists
 * => Hash password
 * => Save user to database
 */


var urlencodedParser = bodyparser.urlencoded({ extended: false })
const bcrypt = require('bcrypt'), salt = 10;



router.post('/',urlencodedParser, async (req, res) => {
    const user = {email : req.body.email, username : req.body.username, password : req.body.password}
    User.findOne({username : req.body.username})
    .then((userToCheck) => {
        if(!userToCheck) {
            bcrypt.hash(user.password, salt)
            .then((hashedPassword) => user.password = hashedPassword)
            .then(() => {
                const userToSave = new User(user).save();
                return userToSave;
            })
            .then((saved) => console.log("User " + saved + " has been saved!"))
        } else {
            console.log("Username " + user.username + " is already taken!")
        }
    })
    .catch((err) => console.log(err));
   
});


router.get('/', (req, res) => {
    res.render('register');
});


module.exports = router;
