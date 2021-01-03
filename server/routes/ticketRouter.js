const express = require('express');
const { session } = require('passport');
const router = express.Router();
const TicketSchema = require('../schemas/ticketSchema');
const User = require('../schemas/userSchema');
const Group = require('../schemas/groupSchema');





//SUBMITTING TICKET
//TODO : Adding username from cookies to the ticket!
router.post('/', isLoggedIn, function (req, res) {
    console.log('Submitting ticket..')
    console.log(req.user)
    const ticketDetails = {
        createdBy: req.user.username,
        department: req.body.department,
        title: req.body.title,
        created: Date.now(),
        description: req.body.description,
        resolved: false
    }

    new TicketSchema(ticketDetails).save(function (err, doc) {
        if (err) {
            console.log('Ticket could not be saved!')
        } else {
            //SAVING TICKET TO THE USER
            User.updateOne({ username: ticketDetails.createdBy }, { $push: { tickets: ticketDetails } }, function (err) {
                if (err) {
                    console.log(err)
                }

            })
            // Update group => add ticket, increment # of pending tickets by 1
            .then(() => {
                Group.updateOne({name : ticketDetails.department}, {$push : {tickets : ticketDetails}, $inc : {nmbrOfPending : 1}}, function(err){
                    if(err){
                        console.log(err)
                    }
                })
            })
            .catch((err) => {console.log(err)})
        }
    });


})

//Checks if user is logged in
function isLoggedIn(req, res, next) {
    if (req.user) {
        console.log('User logged in!')
        next()
    } else {
        console.log('User is not logged in!')
    }
}




module.exports = router;
