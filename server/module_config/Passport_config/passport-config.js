const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var User = require('../../schemas/userSchema')







function initPassport(passport) {
    
    const authenticate =  async (username, password, done) =>{
     await User.findOne({ username: username }, function (err, user) {
    
      if(user == null){
              return done(null, false, {message : 'No user with this username'})
            }
            bcrypt.compare(password, user.password)
            .then((compared) =>{
              if(compared) {
                console.log('User found')
                return done(null, user)
              } else {
                return done(null, false, {message : 'Incorrect password'})
              }
            })
            .catch( (e) => console.log(e + " failure"))
        })
    };


  


  passport.use(new LocalStrategy(authenticate));

  passport.serializeUser(async (user, done) => {  console.log('SERIALIZATION: ' + user._id); return done(null,user._id)});
  
  passport.deserializeUser((id, done) => {
    User.findOne({_id : id}, function(err, user) {
      return done(err,user);
    })
  })



}

module.exports = initPassport;
