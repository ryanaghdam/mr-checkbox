'use strict';

var assert = require('assert');
var R = require('ramda');
var mrCheckbox = require('./');

describe('Mr. Checkbox', function () {
  context('fully-applied invocation', function () {
    it('should return an empty array if all requirements are met', function () {
      var requirements = [{validator: R.T}];
      var result = mrCheckbox(requirements, 'abc');
      assert(result.length === 0);
    });

    it('should return an array with error values of unmet requirements', function () {
      var requirements = [{validator: R.F, error: 'abc'}];
      var result = mrCheckbox(requirements, '123');
      assert(result.length === 1 && result[0] === 'abc')
    });
  });

  context('partially-applied invocation (curried)', function () {
    it('should return a function when called with a single argument', function () {
      assert(typeof mrCheckbox([]) === 'function');
    });

    it('should return an empty array if all requirements are met', function () {
      var validator = mrCheckbox([{validator: R.T}]);
      var result = validator('abc');
      assert(result.length === 0);
    });

    it('should return an array with error values of unmet requirements', function () {
      var validator = mrCheckbox([{validator: R.F, error: 'abc'}]);
      var result = validator('123');
      assert(result.length === 1 && result[0] === 'abc')
    });

  });
});
