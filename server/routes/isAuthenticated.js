const express = require('express')
const router = express.Router()


router.get('/', function(req,res,next){
    if(req.user){
        res.sendStatus(200)
    } else{
        res.sendStatus(401)
    }
})

module.exports = router