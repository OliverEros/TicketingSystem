const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var User = require('../../schemas/userSchema')
const { use } = require('passport');






function initPassport(passport) {
    const authenticate =  async (username, password, done) =>{
     const user = User.findOne({ username: username }, function (err, user) {
      if(user == null){
              console.log('No user');
              return done(null, false, {message : 'No user with this username'})
            }
            bcrypt.compare(password, user.password)
            .then((compared) =>{
              if(compared) {
                console.log(user)
                return done(null, user);
              } else {
                console.log('INCORRECT')
                return done(null, false, {message : 'Incorrect password'})
              }
            })
            .catch( (e) => console.log(e))
        });
    }
  ;

  


  passport.use(new LocalStrategy(authenticate));
  passport.serializeUser((user, done) => {return done(null,user)});
  passport.deserializeUser((id, done) => {return done(null, id)})
}

module.exports = initPassport;
