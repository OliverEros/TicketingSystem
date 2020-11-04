const express =require('express');

const TicketSchemas = require('../schemas/ticketSchema')
const UserSchemas = require('../schemas/userSchema');
const router = require('./ticketRouter');


router.get('/', function(req,res){
    
    let tickets = TicketSchemas.find((err, doc) => {
        if(err) {
            console.log(err)
        } 
        return res.send(doc)
    })
})

module.exports = router