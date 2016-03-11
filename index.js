'use strict';

var R = require('ramda');

function validateRequirements(requirements, value) {
  function validateRule(acc, requirement) {
    if (!requirement.validator(value)) {
      acc.push(requirement.error);
    }

    return acc;
  }

  return requirements.reduce(validateRule, []);
}

module.exports = R.curry(validateRequirements);
