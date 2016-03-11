var mrCheckbox = require('./');
var R = require('ramda')

function isPalindrome(value) {
  return value === value.split('').reverse().join('');
}

var validatePassword = mrCheckbox([
  {
    error: 'Password must 8 characters or longer',
    validator: function (value) { return value.length > 7; }
  },
  {
    error: 'Password must be 50 characters or shorter',
    validator: function (value) { return value.length < 51; }
  },
  {
    error: 'Password cannot be "password"',
    validator: function (value) { return value !== 'password'; }
  },
  {
    error: 'Password cannot start with the letter Q.',
    validator: function (value) { return value.charAt(0) !== 'Q'; }
  },
  {
    error: 'Password must be a palindrome.',
    validator: isPalindrome
  }
]);

var printResult = R.compose(console.log, validatePassword);

[
  'password',
  'abc',
  'QhannahhannahQ',
  'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
  'hannahhannah'
].forEach(printResult);
