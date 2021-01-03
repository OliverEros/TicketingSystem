var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema(
    {
    title : {type : String, required : true, maxlength : 50},
    createdBy : {type : String, required : true},
    created : {type : Date},
    description : {type : String, maxlength : 300, required : true},
    department : {type : String, required : true},
    resolved : {type : Boolean},
    comments : {type : Array},
    });

module.exports = mongoose.model('Ticket', ticketSchema);