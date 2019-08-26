// Start with a webdriver instance:
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
    .withCapabilities(sw.Capabilities.chrome())
    .build()

// And then...
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

it('Main page status', function(done) {
    request('http://localhost' , function(error, response, body) {
        expect(sw.statusCode).to.equal(200);
        done();
    });
});

it('About page status', function (done) {
    request('http://localhost/about', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Fortnite page status', function (done) {
    request('http://localhost/fortnite', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Help page status', function (done) {
    request('http://localhost/help', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Leaderboards page status', function (done) {
    request('http://localhost/leaderboards', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Leauge page status', function (done) {
    request('http://localhost/league', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('League Info page status', function (done) {
    request('http://localhost/leagueinfo', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('LVLUP page status', function (done) {
    request('http://localhost/LVLUPEXPO', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Minecraft page status', function (done) {
    request('http://localhost/mc', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Others page status', function (done) {
    request('http://localhost/others', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Overwatch page status', function (done) {
    request('http://localhost/overwatch', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Rainbow page status', function (done) {
    request('http://localhost/rainbow', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Smash page status', function (done) {
    request('http://localhost/smash', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});