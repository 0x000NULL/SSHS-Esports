'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('mc.pug', { title: 'Silver State Esports', page: 'mc' });
});
module.exports = router;
