const express = require('express')
const router = express.Router();

//log out of passport
router.get('/', (req, res) => {
    if(req.logout()){
        res.sendStatus(200);
    }
    
   
    
})

module.exports = router