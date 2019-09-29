'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('team.pug', { title: 'Silver State Esports', page: 'Team Events' });
});
module.exports = router;
