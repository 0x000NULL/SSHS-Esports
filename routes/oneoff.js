'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('oneoff.pug', { title: 'Silver State Esports', page: 'One-Off Events' });
});
module.exports = router;
