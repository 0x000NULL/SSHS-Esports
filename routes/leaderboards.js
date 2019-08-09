'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('leaderboards', { title: 'SSHS Esports', page: 'leaderboards' });
});
module.exports = router;
