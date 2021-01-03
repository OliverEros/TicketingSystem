var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        email : {type : String, required : true},
        username : {type : String, required : true, min : 10, max : 20},
        password : {type : String, required : true, min : 6, max : 25},
        tickets : {type : []},
        joinedGroups : [],
        isAdmin : Boolean,
        isGroupAdmin : Boolean
    },
   
);

module.exports = mongoose.model('User', userSchema);
