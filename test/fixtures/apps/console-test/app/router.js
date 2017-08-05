'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.status = 200;
  });
  app.get('/error', function* () {
    this.status = 400;
  });
  app.get('/throw422', function* () {
    const error = new Error();
    error.status = 422;
    throw error;
  });
  app.get('/throw500', function* () {
    throw new Error();
  });
  app.post('/', function* () {
    this.status = 201;
  });
};
