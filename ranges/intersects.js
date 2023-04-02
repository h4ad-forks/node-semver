const Range = require('../classes/range')
const parseOptions = require('../internal/parse-options')
const intersects = (r1, r2, options) => {
  options = parseOptions(options)
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects
