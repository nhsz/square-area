/*
  The area of a square is equal to A = s²,
  where s = length of any side of the square
*/
'use strict'

module.exports = (sideLength) => {
  if (sideLength < 0) {
    throw new Error('Invalid size. Side of the square must be greater than or equal to 0')
  } else {
    return Math.pow(sideLength, 2)
  }
}
