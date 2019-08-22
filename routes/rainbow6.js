'use strict';
var express = require('express');
var router = express.Router();
/* GET Rainbow 6 Page page. */
router.get('/', function (req, res, next) {
    res.render('rainbow.pug', { title: 'Silver State Esports', page: 'Rainbow6' });
});
module.exports = router;
