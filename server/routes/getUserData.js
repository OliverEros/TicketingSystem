const express = require('express');
const router = express.Router();

const userData = require('../schemas/userSchema')

router.get('/', function(req,res) {
    console.log(req.user.username)
    userData.findOne({username : req.user.username}, function(err, doc) {
        if(err){
            console.log('Internal error. User could not be found')
        } else{
            res.send(doc)
            
        }
    })
})


// Middleware to check if the user is authenticated! 
function isAuthenticated(req,res,next) {
    if(req.user) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = router;

