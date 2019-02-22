'use strict';
var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();
router.route('/')
.get(function(req, res) {
    Contact
    .fetchAll()
    .then(function(contacts) {
        res.json({ contacts });
    });
});
module.exports = router;