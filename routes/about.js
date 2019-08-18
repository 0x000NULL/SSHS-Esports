'use strict';
var express = require('express');
var router = express.Router();
var games = ["Fortnite", "Dragon Quest XI S: Echoes of an Elusive Age", "Sonic the Hedgehog (2006)", "Super Smash Bros. Ultimate", "Despacito Part Four: Despacito is Unbreakable"]
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about', { title: 'Silver State Esports', page: 'about', game: games[Math.floor(Math.random() * games.length)] });
});
module.exports = router;
