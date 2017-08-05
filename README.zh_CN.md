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

[**English**](https://github.com/brickyang/egg-console/blob/master/README.md)

此插件会将所有请求及其结果打印在屏幕及文件中，类似于 [morgan](https://github.com/expressjs/morgan)，以便于开发者随时调试和查看应用运行情况。

通常情况下，其打印信息为 `[$userId/$ip/$traceId/${cost}ms $method $url] $status`。如果结果异常，则会同时打印出 `error`。如果设置为 `debug`，则也会打印出 `request.body`。

此插件基于 [egg-logger](https://github.com/eggjs/egg-logger) 的 `ctx.logger` 工作。因此对 `egg-logger` 的设置也会对此插件生效。

**info 模式**

![](https://raw.githubusercontent.com/brickyang/egg-console/master/screen/info.png)

**debug 模式**

![](https://raw.githubusercontent.com/brickyang/egg-console/master/screen/debug.png)

## 安装

### NPM
```bash
$ npm i egg-console --save
```
### yarn
```bash
$ yarn add egg-console
```
## 使用

```js
// {app_root}/config/plugin.js
exports.console = {
  enable: true,
  package: 'egg-console',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.console = {
  // local 环境下默认值均为 true，prod 环境下均为 false
  debug: true,
  error: true,
};
```

**debug:** 是否打印 request body 信息。

**error:** 是否打印 error stack 信息。生产环境中默认不打印，可以查看 `common-error.log` 获得 error 的具体内容。

关于配置的说明请查看 [config/config.default.js](config/config.default.js)。

## 协议

[MIT](LICENSE)
