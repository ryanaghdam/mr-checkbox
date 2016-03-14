'use strict';

function validateRequirements(requirements, value) {
  function validateRules(value) {
    return requirements
      .filter(function(requirement) {
        return !requirement.validator(value);
      })
      .map(function(requirement) {
        return requirement.error;
      });
  }

  return arguments.length === 1 ? validateRules : validateRules(value);
}

module.exports = validateRequirements;
