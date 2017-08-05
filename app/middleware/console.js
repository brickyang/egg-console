'use strict';
const { red, green, grey } = require('colors');

module.exports = options => {
  return async function(ctx, next) {
    const { debug, error } = options;
    let status;
    let level = 'info';
    const message = [];

    try {
      await next();

      if (ctx.status < 400) {
        status = green(ctx.status);
      } else {
        level = 'warn';
        status = red(ctx.status);
      }

      if (debug && ctx.request.method.toUpperCase() !== 'GET') {
        const body = grey('\n', JSON.stringify(ctx.request.body));

        message.push(body);
      }
    } catch (err) {
      ctx.status = err.status || 500;

      if (ctx.status === 500) level = 'error';
      else level = 'warn';

      status = red(ctx.status);

      if (error) {
        message.push('\n', err);
      }
    } finally {
      message.unshift(status);
      ctx.logger[level](...message);
    }
  };
};
