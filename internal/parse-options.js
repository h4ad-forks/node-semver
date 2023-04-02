const { FLAG_includePrerelease, FLAG_loose, FLAG_rtl } = require('./constants');

const parseOptions = options => {
  if (!options) return 0;

  if (typeof options === 'number') return options;
  if (typeof options !== 'object') return FLAG_loose;

  let opts = 0;

  opts |= +(!!options.includePrerelease) * FLAG_includePrerelease
  opts |= +(!!options.loose) * FLAG_loose
  opts |= +(!!options.rtl) * FLAG_rtl

  return opts;
};
module.exports = parseOptions;
