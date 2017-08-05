'use strict';

/**
 * egg-console default config
 * @member Config#console
 * @property {String} consoleLevel - some description
 * @property {String} success - some description
 * @property {String} error - some description
 * @property {String} debug - some description
 */
exports.console = {
  ignore: [ '/favicon.ico', '/robots.txt' ],
  debug: true,
  colors: {
    success: 'green',
    error: 'red',
    debug: 'gray',
  },
};
