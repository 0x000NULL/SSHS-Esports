'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('lvlup', { title: 'SSHS Esports', page: 'lvlup' });
});
module.exports = router;
