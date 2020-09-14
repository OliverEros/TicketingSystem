var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        email : {type : 'string', required : true},
        username : {type : 'string', required : true, min : 10, max : 20},
        password : {type : 'string', required : true, min : 6, max : 25},
        tickets : []
    }
);

module.exports = mongoose.model('User', userSchema);
