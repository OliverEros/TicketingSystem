const express = require('express');
const router = express.Router();
const groupSchema = require('../schemas/groupSchema');
const userSchema = require('../schemas/userSchema');


//Check if name is taken
router.post('/',isAdmin,  function(req,res){
    const groupDetails = {
        name : req.body.groupName,
        admin : req.body.admin,
        members : [],
        tickets : [],
        nmbrOfPending : 0,
        nmbrOfResolved : 0
    }

    groupSchema.findOne({name : groupDetails.name})
    .then((group) => {
        if(group){
            console.log('Name for the group is already taken!')
            res.send('Name for the group is already taken!')
        } else {
            new userSchema(groupDetails).save()
        }
    })
    .catch((err) => {
        console.log(err)
    })

})

function isAdmin(req,res,next){
    if(req.user.isAdmin){
        next()
    }else{
        console.log('You must be an admin to create a group!')
    }
}
module.exports = router
