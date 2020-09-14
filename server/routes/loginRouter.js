var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/', function(req,res){
    res.render('login');
});

//Authenticate login with passport
router.post('/', passport.authenticate('local', {
   
    failureFlash : true
}));




module.exports = router;