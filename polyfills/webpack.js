/*
  - Solution for `nx react app gets 'global is not defined`
  - https://github.com/nrwl/nx/issues/3673
*/
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);

  return {
    ...config,
    node: { global: true, fs: 'empty' },
  };
};
