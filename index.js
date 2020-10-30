/* eslint no-console: 0 */
'use strict';

const express = require('express'),
      app     = express(),
      path    = require('path'),
      pkg     = require('./package.json'),
      bars    = require('express-handlebars');

app.engine('.hbs', bars({
  defaultLayout: 'layout', extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.set('port', process.env.port || 1966);
app.use(express.static(path.join(__dirname)));
app.use(express.static('assets'));

require('./routes')(app);

const server = app.listen(app.get('port'), () => {
  console.log(pkg.name, 'running on port', server.address().port);
});
