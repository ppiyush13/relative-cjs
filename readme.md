# relative-cjs

Calculate relative path for ES Module import, commonJs require function

## Install

Install with npm:

```
npm install relative-cjs
```

Install with yarn:

```
yarn add relative-cjs
```

## Motivation

- Very often we need to calculate relative path between two modules to generate CJS require function or ESM import statements.

- This is obivious case when you are generating dynamic code or runtime for webpack plugins.  
  Consider an example where you want to generate CSS stylesheet dynamically with url() function pointing to real files.

- Path to require function or import statement must always start with '.' or '..'

- This module is extends Jon Schlinkert's [relative][relative] module and adds '.' or '..' appropriately

## Usage

```js
var relativeCjs = require("relative-cjs");

relativeCjs("a/b/", "a");
// ..

relativeCjs("./app", "./app");
// ./.

relativeCjs("./a/b.test/", "a/c"); // b.test being treated as dir, read relative module doc for more info
// ../c

relativeCjs("./a/b.test", "a/c"); // b.test being treated as file, read relative module doc for more info
// ./c
```

## Found an issue

Please go through [relative][relative] documentation once. If issue still persists or feature requests, consider opening a [new issue][issues]

[relative]: https://github.com/jonschlinkert/relative
[issues]: https://github.com/ppiyush13/relative-cjs/issues
