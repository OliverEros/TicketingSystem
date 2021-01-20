const express = require('express');
const router = express.Router();



const ticketSchema = require('../schemas/ticketSchema')

/**
 * Function that sends sorted data to the front-end to be displayed using Graph.js
 * Data must be sorted here
 */
router.get('/', function (req, res) {
    //unreturned values that will only be used within the function for comparison purposes
    const labels = new Set()
    //this values is returned to the front-end to shown in graph.js
    const dataToReturn = []

    // Find desired group using the groupname
    ticketSchema.find({ department: 'sd' }, function (err, doc) {
        if (err) {
            console.log(err)
        } else if (!doc) {
            console.log('Group could not be found!')
        } else {
            console.log(doc)
            doc.map(ticket => {
                //Create a set to hold dates and to avoid repeating elements
                labels.add(_date = getDate(ticket.created))
                
            })
            console.log(labels)

            labels.forEach(_date => {
                //Initial values 
                var _result = {
                    date: _date,
                    resolved: 0,
                    pending: 0,
                }
                //Add it to the array
                dataToReturn.push(_result)
                //Get index in order to access object for manipulation
                _index = dataToReturn.indexOf(_result)

                doc.forEach(_ticket_date => {
                    if (_date == getDate(_ticket_date.createdOn)) {
                        if (_ticket_date.resolved) {
                            dataToReturn[_index]['resolved'] += 1;
                        } else {
                            dataToReturn[_index]['pending'] += 1;
                        }
                    }

                })
            });

            console.log(dataToReturn)


            
            res.send(JSON.stringify(dataToReturn))
        }

        })
    
})

//Formats date to a readable format
function getDate(ms) {
    console.log(ms)
    var options = { year: 'numeric', month: 'numeric' }
    var _date = new Date(ms).toLocaleDateString('en', options)

    return _date

}

module.exports = router;