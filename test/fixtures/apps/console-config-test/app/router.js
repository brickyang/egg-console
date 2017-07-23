'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.status = 200;
  });
};
