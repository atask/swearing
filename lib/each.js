'use strict'

module.exports = (coll, iteratee) => {
  var resolvedValues = []
  var reducer = (prev, curr) => {
    return prev
      .then(iteratee.bind(this, curr))
      .then((resolvedValue) => resolvedValues.push(resolvedValue))
  }
  return coll
    .reduce(reducer, Promise.resolve())
    .then(() => resolvedValues)
}
