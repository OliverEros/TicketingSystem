var mongoose = require('mongoose');

var ticket = new mongoose.Schema({
    createdBy : 'String',
    createdOn : Date.now,
    fromDepartment : 'String',
    resolved : Boolean
});

module.exports = ticket; 