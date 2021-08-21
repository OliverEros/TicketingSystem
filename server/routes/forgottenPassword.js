const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const nodemailer_ = require('nodemailer')
const NodeMailer = require('../nodemailer-config/nodemailerConfig');

const UserSchema = require('../schemas/userSchema');


/**
 * Route for forgotten password, using Nodemailer
 */

router.post('/', (req,res) => {
    let _nodemailer = new NodeMailer(nodemailer_);
    let email = req.body.email;

    try{
        _nodemailer.verifyTransporter()
    }catch(error){
        console.log('There was an error!')
    }
   

    UserSchema.findOne({email : email}, (err, doc) => {
        if(err) {
            console.log(err)
            res.status(400).send({message : 'There was an error!'})
        }
        else if(doc == undefined){
            res.status(400).send({message : 'Email could not be found!'})
            return;
        }
        else {
            let message = {from: 'localhost@example.com',to : email, subject : 'Password Reminder', text : 'Your password is:'}
            _nodemailer.sendEmail(message);
            res.status(200).send({message : 'Email could not be found!'})
        }
    })
   
});

module.exports = router;