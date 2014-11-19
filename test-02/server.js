var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  var address = server.address().address;
  if (address == '0.0.0.0') {
    address = 'localhost';
  }
  console.log('server listening on %s:%s', address, server.address().port);
});
