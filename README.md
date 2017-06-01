# square-area

> Get the **[`area of a square`](https://en.wikipedia.org/wiki/Square#Perimeter_and_area)**, given the length of one of its sides


## Install

```
$ npm install --save square-area
```


## Usage

```js
const squareArea = require('square-area')

console.log(squareArea(0))
// => 0

console.log(squareArea(1))
// => 1

console.log(squareArea(7))
// => 49

console.log(squareArea(Math.PI))
// => 9.869604401089358

console.log(squareArea(-1))
// => TypeError: Invalid input. Side of the square must be greater than or equal to 0
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
