const express = require('express');
const router = express.Router();
const groupSchema = require('../schemas/groupSchema');




//Check if name is taken
router.post('/',function(req,res){
    const groupDetails = {
        name : req.body.groupName,
        admin : [req.user],
        members : [],
        tickets : [],
        nmbrOfPending : 0,
        nmbrOfResolved : 0
    }

    console.log(req.body.user)

    groupSchema.findOne({name : groupDetails.name})
    .then((group) => {
        if(group){
            console.log('Name for the group is already taken!')
            res.send('Name for the group is already taken!')
        } else {
            new groupSchema(groupDetails).save()
            }
    })
    .catch((err) => {
        console.log(err)
    })

})


module.exports = router
