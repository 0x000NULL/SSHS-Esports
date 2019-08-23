'use strict';
var express = require('express');
var router = express.Router();
var egames = ["Rust", "DCS World", "Borderlands", "Pivotal", "DreamEaters", "Squad", "TIS-100", "X-Plane 11", "Arma 3"]
var games = ["Fortnite", "Dragon Quest XI S: Echoes of an Elusive Age", "Sonic the Hedgehog (2006)", "Super Smash Bros. Ultimate", "Despacito Part Four: Despacito is Unbreakable"]
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about.pug', { title: 'Silver State Esports', page: 'about', game: games[Math.floor(Math.random() * games.length)], egames: egames[Math.floor(Math.random() * games.length)] });
});
module.exports = router;
