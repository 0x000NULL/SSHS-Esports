'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('leaderboards.pug', { title: 'Silver State Esports', page: 'leaderboards' });
});
module.exports = router;
