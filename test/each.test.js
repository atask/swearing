let each = require('../lib/each')
let test = require('tape')

test('Each handles empty arrays', (assert) => {
  each([], (item) => item + 1)
    .then((result) => {
      assert.equal(result instanceof Array, true,
        'The promise returns an array')
      assert.equal(result.length, 0,
        'The array is empty')
      assert.end()
    })
})

test('Each executes the function on each element', (assert) => {
  let expected = [2, 3, 4]
  each([1, 2, 3], (item) => item + 1)
    .then((result) => {
      assert.equal(result instanceof Array, true,
        'The promise returns an array')
      result.forEach((item, index) => {
        assert.equal(item, expected[index],
          'The value is correct')
      })
      assert.end()
    })
})
