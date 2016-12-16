module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [
    'import',
    'html',
    'promise'
  ],
  rules: {
    'array-bracket-spacing' : 2,
    'block-spacing': [1, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    curly: [2, 'multi-line'],
    'dot-notation' : 1,
    'eol-last': 2,
    'guard-for-in': 0,
    indent: [2, 2],
    'no-bitwise' : 2,
    'no-console' : 0,
    'no-eval' : 2,
    'no-lone-blocks' : 1,
    'no-lonely-if': 1,
    'no-multi-str' : 1,
    'no-multiple-empty-lines': 1,
    'no-native-reassign' : 2,
    'no-nested-ternary': 2,
    'no-new-func' : 1,
    'no-new-object': 1,
    'no-new-wrappers': 1,
    'no-spaced-func': 1,
    'no-trailing-spaces' : 2,
    'no-use-before-define' : [
      'error',
      { 'functions': false }
    ],
    'no-useless-call': 1,
    'object-curly-spacing': [1, 'always'],
    quotes: [
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    semi: 1,
    'space-before-blocks': 2,
    'spaced-comment': 1
  }
}
