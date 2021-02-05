// jshint node: true, esversion: 6
'use strict';

const routes = app => {

  app.get('/', (req, res) => {
    res.render('pages/quiz/records', {});
  })

  app.get('/quiz/inmemoriam', (req, res) => {
    console.log('mem');
    res.render('pages/inmemoriam', {});
  })

  app.get('/:quiz/:round', (req, res) => {
    res.render(`pages/${ req.params.quiz }/${ req.params.round }`, {});
  })

  // if no specific page, just use the default
  // app.get('/:quiz/', (req, res) => {
  //   res.render(`pages/${ req.params.quiz }`, {});
  // })

  // default route if nothing else matches
  app.get('*', (req, res) => {
    res.status(404).render('404', {});
  })

}

module.exports = routes;
