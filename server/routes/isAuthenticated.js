const express = require('express')
const router = express.Router()


router.get('/', function(req,res){
    if(req.user){
        res.send({success : true})
    } else{
        res.send({success: false})
    }
})

module.exports = router