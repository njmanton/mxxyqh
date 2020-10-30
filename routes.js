// jshint node: true, esversion: 6
'use strict';

const routes = app => {

  app.get('/', (req, res) => {
    res.render('pages/main', {});
  })

  app.get('/quiz/:round', (req, res) => {
    res.render(`pages/${ req.params.round }`, {});
  })

}

module.exports = routes;
