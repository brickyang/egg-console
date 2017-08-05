'use strict';
const colors = require('colors');
const validate = require('../../lib/validate');

module.exports = options => {
  return async function(ctx, next) {
    options = validate(options);
    const { debug, colors } = options;
    let status;
    let level = 'info';
    const message = [];

    try {
      await next();

      if (ctx.status < 400) {
        status = colors[colors.success](ctx.status);
      } else {
        level = 'warn';
        status = colors[colors.error](ctx.status);
      }

      if (debug && ctx.request.method.toUpperCase() !== 'GET') {
        const body = colors[colors.debug](
          '\n',
          JSON.stringify(ctx.request.body || {})
        );

        message.push(body);
      }
    } catch (err) {
      ctx.status = err.status || 500;

      level = 'warn';
      status = colors[colors.error](ctx.status);
      message.push('\n', err);
    } finally {
      message.unshift(status);
      ctx.logger[level](...message);
    }
  };
};
