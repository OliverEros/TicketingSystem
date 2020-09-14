var mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '.env'});


mongoose.connect(process.env.LOGINCREDENTIALS, { useNewUrlParser: true, useUnifiedTopology: true })
.then(success)
.catch((err) => console.log('Error: ' + err));  

var success = mongoose.connection.on('connected',() => {
    console.log('Connected');
}) ;

mongoose.connection.on('error', (err) => {
    console.log('There was an error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;