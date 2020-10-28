var express = require('express');
var router = express.Router();
var passport = require('passport');




router.get('/', function(req,res){
    res.render('login');
});

//Authenticate login with passport
router.post('/', passport.authenticate('local', {session : true}), function(req, res,next){
  if(req.session.user){
      next()
  } else {
      res.redirect('/login')
  }
})



module.exports = router;