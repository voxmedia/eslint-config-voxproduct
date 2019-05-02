module.exports = {
  extends: ['voxproduct'],
  rules: {
    'no-foreach/no-foreach': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForStatement',
        message: 'for (let [index, item] of array.entries()) is preferred where possible'
      },
      {
        selector: 'ForInStatement',
        message: 'for (let key of Object.keys(obj)) is preferred where possible'
      }
    ]
  }
}
