'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('fortnite', { title: 'Silver State Esports', page: 'fortnite' });
});
module.exports = router;
