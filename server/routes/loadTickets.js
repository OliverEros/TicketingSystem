const express = require('express');
const router = express.Router()

const TicketSchema = require('../schemas/ticketSchema');
/**
 * Returns a collection of documents (tickets) for a given group
 * Calculates the number of pages for pagination
 */
router.get('/', (req, res) => {
    //Copy the page number before we delete the 'atPage' attr
    let atPage = req.query.atPage; //Current page
    console.log(atPage)

    console.log(req.query)
    //Delete attribute since it is not needed for Mongo search
    let query = req.query
    delete query['atPage']

    // Create variables
    let numberOfPages; // //Variable used to calculate the number of pages
    let skip; //Number of tickets to skip

    //If statement that calculates the number of tickets to skip
    //if it is the first page, do not skip
    //else skip [number of current page - 1] and only load 10 tickets (limit)
    if (atPage == 1) {
        skip = 0
    } else {
        skip = (atPage - 1) * 10
    }

    TicketSchema.countDocuments(query)
        .then(num => {
            //Round up (gives us the number of pages for pagination)
            // Divide all available tickets, then divie it by 10 (10 tickets per page)
            numberOfPages = Math.ceil((num / 10))
        })
        .then(() => TicketSchema.find(query).skip(skip).limit(10))
        .then(tickets => {
            res.send({ data: tickets, pages: numberOfPages })
        })
        .catch(err => {
            console.log
        })
})


/**
 * 
 *Method that check if the user is logged in
 */

function isLoggedIn(req, res, next) {
    if (req.user) {
        next()
    } else {
        console.log('User is not logged in! ')
    }
}

module.exports = router