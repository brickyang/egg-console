# egg-console

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-console.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-console
[travis-image]: https://img.shields.io/travis/brickyang/egg-console.svg?style=flat-square
[travis-url]: https://travis-ci.org/brickyang/egg-console
[codecov-image]: https://img.shields.io/codecov/c/github/brickyang/egg-console.svg?style=flat-square
[codecov-url]: https://codecov.io/github/brickyang/egg-console?branch=master
[david-image]: https://img.shields.io/david/brickyang/egg-console.svg?style=flat-square
[david-url]: https://david-dm.org/brickyang/egg-console
[snyk-image]: https://snyk.io/test/npm/egg-console/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-console
[download-image]: https://img.shields.io/npm/dm/egg-console.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-console

[**中文版**](https://github.com/brickyang/egg-console/blob/master/README.zh_CN.md)

This plugin works like [morgan](https://github.com/expressjs/morgan), prints all request & result both to console and local file.

Generally, it prints `[$userId/$ip/$traceId/${cost}ms $method $url] $status`. If there's an error, it will print the error attached. If the `config.consoleLevel` is set to `debug`, it will prints the request body as json format attached.

This plugin needs [egg-logger](https://github.com/eggjs/egg-logger) which is a built-in plugin of egg.js. It bases on `ctx.logger`, so the options of it will also impact this plugin.

**info Mode**

![](https://raw.githubusercontent.com/brickyang/egg-console/master/screen/info.png)

**debug Mode**

![](https://raw.githubusercontent.com/brickyang/egg-console/master/screen/debug.png)

## Install

### NPM
```bash
$ npm i egg-console --save
```
### yarn
```bash
$ yarn add egg-console
```
## Usage

```js
// {app_root}/config/plugin.js
exports.console = {
  enable: true,
  package: 'egg-console',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.console = {
  // both default true in local env and false in prod env.
  debug: true,
  error: true,
};
```

**debug:** In this set the plugin will print the request body.

**error:** If false, the plugin will not print the error's stack. You should check the `common-error.log` for details of error.

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE)
