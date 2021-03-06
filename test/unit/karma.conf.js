// karma.conf.js
const webpackConfig = require('../../build/webpack.config.dev.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai-as-promised', 'chai'],
    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-chai-as-promised',
        'karma-webpack',
        'karma-sourcemap-loader',
        'karma-coverage',
        'karma-spec-reporter',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher'
    ],
    files: [
       '../../node_modules/@babel/polyfill/dist/polyfill.js',
        './index.js'
    ],
    preprocessors: {
        './index.js': ['webpack', 'sourcemap'],
        [require.resolve('chai-as-promised')]: ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    browsers: ['Chrome']
  })
};
