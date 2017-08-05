'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/console.config.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/console-config-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should status 400 and no error stack', () => {
    return request(app.callback()).get('/error').expect(400);
  });

  it('should status 500 and no error stack', () => {
    return request(app.callback()).get('/throw').expect(500);
  });

  it('should status 201 and no request body', () => {
    app.mockCsrf();
    return request(app.callback()).post('/').send({ foo: 'bar' }).expect(201);
  });
});
