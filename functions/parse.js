const { MAX_LENGTH, FLAG_loose, hasFlag } = require('../internal/constants')
const { re, t } = require('../internal/re')
const SemVer = require('../classes/semver')

const parseOptions = require('../internal/parse-options')
const parse = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  options = parseOptions(options)
  const r = hasFlag(options, FLAG_loose) ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse
