'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('league.pug', { title: 'Silver State Esports', page: 'league' });
});
module.exports = router;
