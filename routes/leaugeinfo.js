'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('leaugeinfo', { title: 'SSHS Esports', page: 'leaugeinfo' });
});
module.exports = router;
