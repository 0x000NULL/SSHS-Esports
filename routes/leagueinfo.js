'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('leagueinfo', { title: 'SSHS Esports', page: 'leagueinfo' });
});
module.exports = router;
