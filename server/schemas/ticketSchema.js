var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema(
    {
    title : 'String',
    createdBy : 'String',
    created : Date,
    description : 'String',
    department : 'String',
    resolved : Boolean,
    comments : [],
    

    });

module.exports = mongoose.model('Ticket', ticketSchema);