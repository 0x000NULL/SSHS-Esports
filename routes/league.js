﻿'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('league', { title: 'SSHS Esports', page: 'league' });
});
module.exports = router;