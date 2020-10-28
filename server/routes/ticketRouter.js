const express = require('express');
const { session } = require('passport');
const router = express.Router();
const TicketSchema = require('../schemas/ticketSchema');





//SUBMITTING TICKET
//TODO : Adding username from cookies to the ticket!
router.post('/',function(req,res){
    console.log('Submitting ticket..')
    console.log(req.user)
    const ticketDetails = {
        createdBy : req.user,
        department : req.body.department,
        resolved : false
    }

     new TicketSchema(ticketDetails).save(function(err, doc){
        if(err){
            console.log('Ticket could not be saved!')
        }else{
            console.log(doc + ' has been saved!')
            res.send();
        }
    });
    


    
})

module.exports = router;
