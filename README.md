# next-parse-request-args
> Request arguments parser.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-parse-request-args
```

## usage
```js
import '@feizheng/next-parse-request-args';

// input:
// 1. (config)
// 2. (url, config)
// 3. (method, url, config)
// 4. (method, url, data, config)

// output:
{
  url: '/api/v1',
  method:'get',
  data: { query:1, zx:1 },
  Authorization: 'eyJhbGciOiJIUzUxMiJ9', 
  headers: { 
    'Content-Type': 'application/json' 
  }
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-parse-request-args/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-parse-request-args
[version-url]: https://npmjs.org/package/@feizheng/next-parse-request-args

[license-image]: https://img.shields.io/npm/l/@feizheng/next-parse-request-args
[license-url]: https://github.com/afeiship/next-parse-request-args/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-parse-request-args
[size-url]: https://github.com/afeiship/next-parse-request-args/blob/master/dist/next-parse-request-args.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-parse-request-args
[download-url]: https://www.npmjs.com/package/@feizheng/next-parse-request-args
