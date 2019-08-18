'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('overwatch', { title: 'Silver State Esports', page: 'overwatch' });
});
module.exports = router;
