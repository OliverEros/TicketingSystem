const express = require('express');

const TicketSchemas = require('../schemas/ticketSchema')
const UserSchemas = require('../schemas/userSchema');
const router = require('./ticketRouter');


//Only find tickets that belong to the same group as the user


router.get('/', isLoggedIn, async function (req, res) {
    // Find groups that the user is joined
    let groupsJoined = await UserSchemas.find({ username: req.user.username })
        .then((foundUser) => {
            if(foundUser[0].joinedGroups){
            //Return joined groups in the form of an array
            return [foundUser[0].joinedGroups]
            }
        })
        .catch((err) => { console.log(err) })

    // If the user is not joined to any group, no tickets will be displayed. JUMP TO THE ELSE STATEMENT
    if (groupsJoined.length > 0) {
        //Return all tickets
        let ticketsToReturn = await TicketSchemas.find()
            //
            .then((allTickets) => {
                let toReturn = []
                //Compare tickets and the groups
                //If user is joined to the group, return 
                groupsJoined.forEach(group => {
                    allTickets.forEach(ticket => {
                        if (group.name == ticket.department) {
                            toReturn.push(ticket)
                        }
                    })
                });
                res.send(toReturn)
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        //User is not joined to any group, therefore we return an empty array
        // which React will handle with the error message "There are no tickets to show!"
        res.send([])
    }

})


function isLoggedIn(req, res, next) {
    if (req.user) {
        next()
    } else {
        console.log('User is not logged in! ')
    }
}

module.exports = router