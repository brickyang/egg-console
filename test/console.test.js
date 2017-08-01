'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/console.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/console-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should status 200', () => {
    return request(app.callback()).get('/').expect(200);
  });

  it('should status 400', () => {
    return request(app.callback()).get('/error').expect(400);
  });

  it('should status 500', () => {
    return request(app.callback()).get('/throw').expect(500);
  });

  it('should status 201', () => {
    app.mockCsrf();
    return request(app.callback()).post('/').expect(201);
  });
});
