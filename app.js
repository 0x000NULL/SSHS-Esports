'use strict';
var debug = require('debug');
//var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express')
    , cons = require('consolidate')
    , app = express();
var engines = require('consolidate');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);

var routes = require('./routes/index');
var users = require('./routes/users');
var others = require('./routes/others')
var league = require('./routes/league')
var smash = require('./routes/smash-info');
var about = require('./routes/about');
var leaderboards = require('./routes/leaderboards');
var mc = require('./routes/mc')
var fortnite = require('./routes/fortnite')
var overwatch = require('./routes/overwatch')
var LVLUPEXPO = require('./routes/LVLUPEXPO')
var leagueinfo = require('./routes/leagueinfo')
var blog = require('./routes/blog')
var help = require('./routes/help')
var rainbow = require('./routes/rainbow6')

var app = express();
//var key = fs.readFileSync('www/ssl/server.key', 'utf8');
//var cert = fs.readFileSync('www/ssl/server.cert', 'utf8');

//var credentials = { key: key, cert: cert };

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.swig); // take note, using 'html', not 'ejs' or 'pug'..
app.set('view engine', 'html'); // also 'html' here.;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/smash', smash);
app.use('/users', users);
app.use('/about', about);
app.use('/league', league);
app.use('/others', others);
app.use('/leaderboards', leaderboards);
app.use('/mc', mc);
app.use('/overwatch', overwatch);
app.use('/fortnite', fortnite);
app.use('/LVLUPEXPO', LVLUPEXPO);
app.use('/leagueinfo', leagueinfo);
app.use('/blog', blog);
app.use('/help', help);
app.use('/rainbow', rainbow)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.pug', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

//httpServer.listen(80);
//httpsServer.listen(443);
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

