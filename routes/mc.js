'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('mc', { title: 'WCTA Esports', page: 'mc' });
});
module.exports = router;
