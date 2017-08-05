'use strict';

module.exports = app => {
  app.get('/error', function* () {
    this.status = 400;
  });
  app.get('/throw', function* () {
    throw new Error();
  });
  app.post('/', function* () {
    this.status = 201;
  });
};
