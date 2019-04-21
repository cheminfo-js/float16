# float16

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]
  
Encode and decode float16

## Installation

`$ npm install float16`

## [API Documentation](https://cheminfo.github.io/float16/)

## Example

```js
const { byteToFloat16, float16ToByte } = require('float16');

byteToFloat16(0x3c00)).toBe(1);
byteToFloat16(1)).toBe(0x3c00);
```


## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/float16.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/float16
[travis-image]: https://img.shields.io/travis/cheminfo/float16/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo/float16
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/float16.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/float16
[david-image]: https://img.shields.io/david/cheminfo/float16.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo/float16
[download-image]: https://img.shields.io/npm/dm/float16.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/float16
