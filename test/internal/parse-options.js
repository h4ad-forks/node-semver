const t = require('tap')
const { FLAG_loose, FLAG_includePrerelease, FLAG_rtl } = require('../../internal/constants.js')
const parseOptions = require('../../internal/parse-options.js')

t.test('falsey values always empty options object', t => {
  t.strictSame(parseOptions(null), 0)
  t.strictSame(parseOptions(false), 0)
  t.strictSame(parseOptions(undefined), 0)
  t.strictSame(parseOptions(), 0)
  t.strictSame(parseOptions(0), 0)
  t.strictSame(parseOptions(''), 0)
  t.end()
})

t.test('truthy non-objects always loose mode, for backwards comp', t => {
  t.strictSame(parseOptions('hello'), FLAG_loose)
  t.strictSame(parseOptions(true), FLAG_loose)
  t.strictSame(parseOptions(1), FLAG_loose)
  t.end()
})

t.test('objects only include truthy flags we know about, set to true', t => {
  t.strictSame(parseOptions(/asdf/), 0)
  t.strictSame(parseOptions(new Error('hello')), 0)
  t.strictSame(parseOptions({ loose: true, a: 1, rtl: false }), FLAG_loose)
  t.strictSame(parseOptions({ loose: 1, rtl: 2, includePrerelease: 10 }), FLAG_loose | FLAG_includePrerelease | FLAG_rtl)
  t.end()
})
