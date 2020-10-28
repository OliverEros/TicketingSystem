var express = require('express');
const { NotExtended } = require('http-errors');
const { session } = require('passport');
const passport = require('passport');
const { use } = require('./loginRouter');
var router = express.Router();




router.get('/', (req, res,next) => {
    res.send(req.user);
});






module.exports = router;