var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', (req,res) => {
    if(req.user){
        res.send({isLoggedIn : true})
    }
})

//Authenticate login with passport
router.post('/', passport.authenticate('local', {session : true}), function(req, res,next){
  if(req.session.user){
      next()
  } else {
      res.send(200)
  }
})




module.exports = router;