'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('smash', { title: 'SSHS Esports', page: 'smash', registry: true });
});
module.exports = router;