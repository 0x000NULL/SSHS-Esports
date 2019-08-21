'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('help.pug', { title: 'Silver State Esports', page: 'help' });
});
module.exports = router;
