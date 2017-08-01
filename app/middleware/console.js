'use strict';
const colors = require('colors');
const validate = require('../../lib/validate');

module.exports = (options, app) => {
  return async function(ctx, next) {
    options = validate(options);
    const { success, error, debug } = options;
    let status;
    let level = (options.consoleLevel || app.config.logger.consoleLevel)
      .toLowerCase();
    const message = [];

    try {
      await next();

      if (ctx.status < 400) {
        status = colors[success](ctx.status);
      } else {
        level = 'warn';
        status = colors[error](ctx.status);
      }

      if (level === 'debug' && ctx.request.method.toUpperCase() !== 'GET') {
        const body = colors[debug]('\n', JSON.stringify(ctx.request.body));
        message.push(body);
      }
    } catch (err) {
      status = colors[error](err.status);
      level = 'warn';
      message.push('\n', err);
    } finally {
      message.unshift(status);
      ctx.logger[level](...message);
    }
  };
};
