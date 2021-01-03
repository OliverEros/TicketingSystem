const express = require('express')
const router = express.Router()

const userData = require('../schemas/userSchema')
//Method to check if the user is logged in! 
router.get('/', function(req,res){
    if(req.isAuthenticated()){
        console.log('True')
        res.send(200)
    } else {
        console.log('no user')
        res.send(500)
    }
})

module.exports = router