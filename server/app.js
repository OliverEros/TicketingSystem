require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
//Connection to the database
var passport = require('passport');
var User = require('./schemas/userSchema');
const cors = require('cors');
const initPassport = require('./module_config/Passport_config/passport-config');
const initMongo = require('./mongodb/mongo');
initPassport(passport);


//Setting up routes
var indexRouter = require('./routes/indexRouter');
var registerRouter = require('./routes/registerRouter') ;
var loginRouter = require('./routes/loginRouter');
var homeRouter = require('./routes/homeRouter');
var ticketRouter = require('./routes/ticketRouter');
var loadTicketsRouter = require('./routes/loadTickets');
var loadUserData = require('./routes/getUserData');
var createGroup = require('./routes/createGroup');

const flash = require('express-flash');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('keyboard cat'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: true,cookie:{maxAge : 3600000  } }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.urlencoded({extended : false}));
//Enables fetching data from the back-end
app.use(cors({credentials: true, origin :'http://localhost:3006' }));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login',loginRouter);
app.use('/home', homeRouter);
app.use('/submitTicket', ticketRouter );
app.use('/loadTickets', loadTicketsRouter);
app.use('/loadUserData', loadUserData);
app.use('/createGroup',createGroup)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
