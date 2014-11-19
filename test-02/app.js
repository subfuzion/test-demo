var express = require('express'),
    app = express(),
    math = require('./lib');

// export the app so that we can start it with either server.js
// or in our tests
module.exports = app;

// our app routes

app.get('/add/:a/:b', function(req, res) {
  var a = Number(req.params.a),
      b = Number(req.params.b);

  res.header('Content-Type', 'text/plain');
  res.send(math.add(a, b).toString());
});

app.get('/sub/:a/:b', function(req, res) {
  var a = Number(req.params.a),
      b = Number(req.params.b);

  res.header('Content-Type', 'text/plain');
  res.send(math.sub(a, b).toString());
});

