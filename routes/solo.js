'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('solo.pug', { title: 'Silver State Esports', page: 'Solo Events' });
});
module.exports = router;
