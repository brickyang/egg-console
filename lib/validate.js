'use strict';
const colors = require('colors');

module.exports = options => {
  const invalid = [];

  if (!colors[options.success]) {
    invalid.push('success');
    options.success = 'green';
  }

  if (!colors[options.error]) {
    invalid.push('error');
    options.success = 'red';
  }

  if (!colors[options.debug]) {
    invalid.push('debug');
    options.success = 'gray';
  }

  if (invalid.length > 0) {
    invalid.forEach(key => console.log(colors.yellow(`[egg-console] ${options[key]} of ${key} is not a valid color.`)));
  }

  return options;
};
