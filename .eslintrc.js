module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "salt",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
}