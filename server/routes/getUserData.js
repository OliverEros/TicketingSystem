const express = require('express');
const router = express.Router();

const userData = require('../schemas/userSchema')

router.get('/',isAuthenticated, function(req,res) {
    console.log(req.user.username)
    userData.findOne({username : req.user.username}, function(err, doc) {
        if(err){
            console.log('Internal error. User could not be found')
        } else{
            console.log(doc)
            res.send(doc)
            
        }
    })
})



function isAuthenticated(req,res,next) {
    if(req.user) {
        next()
    } else {
        res.redirect('/home')
    }
}

module.exports = router;

