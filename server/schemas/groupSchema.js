const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
    {
        admins : [],
        members : [],


        tickets : [],
        nmbrOfPending : Number,  //keeping track of the number of pending tickets for statistics (Chart.js)
        nmbrOfResolved : Number, //number of resolved tickets
        name : String
    }
)

module.exports = mongoose.model('Groups', groupSchema);