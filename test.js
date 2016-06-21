/* eslint-env node, mocha */
/* eslint func-names: 0 */
'use strict';

var assert = require('assert');
var mrCheckbox = require('./');

var never = function() { return false; };
var always = function() { return true; };

describe('Mr. Checkbox', function() {
  context('fully-applied invocation', function() {
    it('should return an empty array if all requirements are met', function() {
      var requirements = [{validator: always}];
      var result = mrCheckbox(requirements, 'abc');
      assert(result.length === 0);
    });

    it('should return an array with error values of unmet requirements', function() {
      var requirements = [{validator: never, error: 'abc'}];
      var result = mrCheckbox(requirements, '123');
      assert(result.length === 1 && result[0] === 'abc');
    });
  });

  context('partially-applied invocation (curried)', function() {
    it('should return a function when called with a single argument', function() {
      assert(typeof mrCheckbox([]) === 'function');
    });

    it('should return an empty array if all requirements are met', function() {
      var validator = mrCheckbox([{validator: always}]);
      var result = validator('abc');
      assert(result.length === 0);
    });

    it('should return an array with error values of unmet requirements', function() {
      var validator = mrCheckbox([{validator: never, error: 'abc'}]);
      var result = validator('123');
      assert(result.length === 1 && result[0] === 'abc');
    });
  });
});
