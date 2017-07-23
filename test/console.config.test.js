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

  it('should status 200', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });
});
