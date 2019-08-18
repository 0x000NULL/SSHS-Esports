'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('LVLUPEXPO', { title: 'Silver State Esports', page: 'lvlup' });
});
module.exports = router;
