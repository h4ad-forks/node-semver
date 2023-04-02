const { FLAG_loose } = require('../internal/constants')
const compare = require('./compare')
const compareLoose = (a, b) => compare(a, b, FLAG_loose)
module.exports = compareLoose
