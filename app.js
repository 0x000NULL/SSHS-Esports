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
var mongoose = require('mongoose');
const run = async () => {
    const mongooseDb = await mongoose.connect('mongodb+srv://stripcheese:Painkiller69%21@sse-db-d7ark.mongodb.net/test', { useNewUrlParser: true })
};
const mongooseDb = mongoose.connect('mongodb+srv://stripcheese:Painkiller69%21@sse-db-d7ark.mongodb.net/test', { useNewUrlParser: true })

//-----Session-----
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);


app.use(session({
    store: new MongoStore({
        url: 'mongodb+srv://stripcheese:Painkiller69%21@sse-db-d7ark.mongodb.net/test',
        secret: 'SUPERFUCKINGSECRET',
        saveUninitialized: false, // don't create session until something stored
        resave: false, //don't save session if unmodified
        ttl: 14 * 24 * 60 * 60, // = 14 days. Default
        autoRemove: 'native', // Default
        key_size: '64',//default is 32, and encription is AES-256-gcm adn a hashing if sha512
        touchAfter: 24 * 3600 // time period in seconds
        //by doing this, setting touchAfter: 24 * 3600 
        //you are saying to the session be updated only 
        //one time in a period of 24 hours, does not matter 
        //how many request's are made (with the exception of 
        //those that change something on the session data)
    })
}));
//-------------------------------------------------------
//-----Admin Panel------
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
AdminBro.registerAdapter(AdminBroMongoose)
//----------------------
//const Article = require('./models/article')
//--Resource Catagories
const contentParent = {
    name: 'Content',
    icon: 'fa fa-file-text',
}
//Catagorie sub-"group thingies"
//const adminBro = {
//    resources: [
//        { resource: Article, options: { parent: contentParent } },
//        { resource: BlogPost, options: { parent: contentParent } },
//        { resource: Comment, options: { parent: contentParent } },
//    ],
//    dashboard: {
//        component: AdminBro.bundle('./Dashboard/my-dashboard-component')
//    },
//}

//----------------------
//--User Types--
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: String })
//----------------------
const adminBro = new AdminBro({
    rootPath: '/admin',
    logoutPath: '/',
    loginPath: '/admin/sign-in',
    databases: [mongooseDb],
    resources: [User, Admin],
    branding: {
        companyName: 'Silver State Esports',
        softwareBrothers: 'False',
        logo: '/public/images/HSESPORTSLOGO_1.png',
        favicon: '/public/images/favicon.new.ico'
    },
    version: {
        admin: 'false',
        app: '1.0'
    }
})

const router = AdminBroExpress.buildRouter(adminBro)
AdminBro.registerAdapter(AdminBroMongoose)
    app.use(adminBro.options.rootPath, router)
    app.use(adminBro, router)
console.log('AdminBro is localhost/admin')

//-------------------------------------------------------

var routes = require('./routes/index');
var users = require('./routes/users');
var others = require('./routes/others')
var league = require('./routes/league')
var smash = require('./routes/smash-info');
var about = require('./routes/about');
var rankings = require('./routes/rankings');
var mc = require('./routes/mc');
var fortnite = require('./routes/fortnite');
var overwatch = require('./routes/overwatch');
var LVLUPEXPO = require('./routes/LVLUPEXPO');
var leagueinfo = require('./routes/leagueinfo');
var blog = require('./routes/blog');
var help = require('./routes/help');
var resources = require('./routes/resources');
var solo = require('./routes/solo');
var team = require('./routes/team');
var oneoff = require('./routes/oneoff');

var app = express();
//--------Production SSL Files--------
//const privateKey = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/cert.pem', 'utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/fullchain.pem', 'utf8');

//const credentials = {
//	key: privateKey,
//	cert: certificate,
//	ca: ca
//};

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
app.use('/rankings', rankings);
app.use('/mc', mc);
app.use('/overwatch', overwatch);
app.use('/fortnite', fortnite);
app.use('/LVLUPEXPO', LVLUPEXPO);
app.use('/leagueinfo', leagueinfo);
app.use('/blog', blog);
app.use('/help', help);
app.use('/resources', resources);
app.use('/team', team);
app.use('/solo', solo);
app.use('/oneoff', oneoff);

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
    res.render('error.pug', {
        message: err.message,
        error: {}
    });
});


var httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

//httpServer.listen(80);
//httpsServer.listen(443);
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

//httpsServer.listen(443, () => {
//	console.log('HTTPS Server running on port 443');
//});