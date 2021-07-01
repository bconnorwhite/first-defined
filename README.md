<div align="center">
  <h1>first-defined</h1>
  <a href="https://npmjs.com/package/first-defined">
    <img alt="NPM" src="https://img.shields.io/npm/v/first-defined.svg">
  </a>
  <a href="https://github.com/bconnorwhite/first-defined">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/first-defined.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/first-defined?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/first-defined/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/first-defined">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/first-defined?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Return the first defined item in an array.

## Installation

```sh
yarn add first-defined
```

```sh
npm install first-defined
```

## Usage
```ts
import { firstDefined } from "first-defined";

firstDefined([undefined, 1]);             // 1
firstDefined([undefiend, undefined], 2);  // 2
firstDefined([undefined, undefined]);     // undefined
```

## Types
```ts
type Defined<T extends any = any> = Exclude<T, undefined>;

type Maybe<T extends any> = T | undefined;

function firstDefined<T extends Defined>(list: Maybe<T>[], defaultValue?: T): Maybe<T>;
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/first-defined.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/first-defined.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
