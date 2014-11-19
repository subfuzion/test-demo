var assert = require('assert'),
    app = require('../app'),
    port = process.env.PORT || 3000,
	hippie = require('hippie');


// before we run any tests, we would like to start the express server
// this can be done by using a before function. Mocha also supports
// an after function. Aside from being at the top level for the entire
// module, hese functions can be inside of individual test groups.
// In addition, test groups can also have a beforeEach and afterEach
// if there is code you want to run before or after each individual
// test case.
// Because this function is going to start a server and we want to wait
// until the server is finished starting, we will want mocha to wait
// until we say we're ready to proceed. We do that by calling mocha
// back when we're ready. When we add an argument to the callback we
// provide to mocha instead of just an empty callback function, then
// mocha knows to wait until we invoke the callback.
// I've called it callback to make it clear this is a callback arg,
// but the convention for mocha is to normally name the arg 'done'
// (or 'next').
before(function(callback) {
  app.set('port', port);

  var server = app.listen(app.get('port'), function() {
    console.log('app listening on port ' + port);
    callback();
  });
});


describe('add', function() {

  it ('should return 5 when called with 2 and 3', function(done) {
    hippie()
	  .base('http://localhost:' + port)
	  .get('/add/2/3')
	  .expectStatus(200)
	  .expectHeader('Content-Type', 'text/plain; charset=utf-8')
	  .expectBody('5')
	  .end(function(err, res, body) {
	    // tell mocha we're done; if err is null, then mocha is happy
	    done(err);
	  });
  });

});

describe('sub', function() {

  it ('should return 2 when called with 5, 3', function() {
    hippie()
	  .base('http://localhost:' + port)
	  .get('/sub/5/3')
	  .expectStatus(200)
	  .expectHeader('Content-Type', 'text/plain; charset=utf-8')
	  .expectBody('2')
	  .end(function(err, res, body) {
	    // tell mocha we're done; if err is null, then mocha is happy
	    done(err);
	  });
  });

});

