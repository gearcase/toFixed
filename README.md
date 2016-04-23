# toFixed

> Converts a number into a string, keeping a specified number of decimals.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/tofixed/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/tofixed/master.svg?style=flat-square)](https://travis-ci.org/mock-end/tofixed)
[![coverage:?](https://img.shields.io/coveralls/mock-end/tofixed/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/tofixed)


## Install

```
$ npm install --save tofixed
```

## Usage

```js
var toFixed = require('tofixed');

// API
// - toFixed(number, precision)

toFixed(5.56789, 2);
// => '5.57'
```

Note: it will return a fixed number of *at most* `precision` digits after the decimal. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/tofixed/issues/new).
