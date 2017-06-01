import test from 'ava'
import squareArea from './'

test(t => {
  t.is(squareArea(0), 0)
})

test(t => {
  t.is(squareArea(1), 1)
})

test(t => {
  t.is(squareArea(7), 49)
})

test(t => {
  t.is(squareArea(Math.PI), 9.869604401089358)
})

test('Negative value', t => {
  const error = t.throws(() => {
    squareArea(-1)
  }, Error)

  t.is(error.message, 'Invalid size. Side of the square must be greater than or equal to 0')
})
