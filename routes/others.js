'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('others.pug', { title: 'Silver State Esports', page: 'others' });
});
module.exports = router;
