const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
    {
        admins : {type : Array},
        members : {type : Array},
        nmbrOfPending : Number,  //keeping track of the number of pending tickets for statistics (Chart.js)
        nmbrOfResolved : Number, //number of resolved tickets
        name : {type : String}
    }
);

module.exports = mongoose.model('Groups', groupSchema);