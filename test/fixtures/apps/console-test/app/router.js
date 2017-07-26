'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.status = 200;
  });
  app.get('/error', function* () {
    this.status = 404;
  });
  app.get('/throw', function* () {
    this.throw(400);
  });
  app.post('/', function* () {
    this.status = 201;
  });
};
