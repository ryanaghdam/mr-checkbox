'use strict';

var autoCurry = require('auto-curry');

function validateRequirements(requirements, value) {
  function validateRule(acc, requirement) {
    if (!requirement.validator(value)) {
      acc.push(requirement.error);
    }

    return acc;
  }

  return requirements.reduce(validateRule, []);
}

module.exports = autoCurry(validateRequirements);
