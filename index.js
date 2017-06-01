/*
  The area of a square is equal to A = s²,
  where s = any side of the square
*/
'use strict'

module.exports = (side) => {
  if (side < 0) {
    throw new TypeError('Invalid input. Side of the square must be greater than or equal to 0')
  } else {
    return Math.pow(side, 2)
  }
}
