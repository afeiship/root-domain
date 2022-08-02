# root-domain
> Extract root domain name from an URL.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/root-domain
```

## usage
```js
import rd from '@jswork/root-domain';

rd('www.baidu.com');                      // baidu.com
rd('https://api.js.work:8080/v1/user');   // js.work
rd('http://localhost');                   // localhost
```

## license
Code released under [the MIT license](https://github.com/afeiship/root-domain/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/root-domain
[version-url]: https://npmjs.org/package/@jswork/root-domain

[license-image]: https://img.shields.io/npm/l/@jswork/root-domain
[license-url]: https://github.com/afeiship/root-domain/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/root-domain
[size-url]: https://github.com/afeiship/root-domain/blob/master/dist/root-domain.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/root-domain
[download-url]: https://www.npmjs.com/package/@jswork/root-domain
