'use strict';

const fn = function() {
  console.log(variable);
  var variable = 3;
};

module.exports = { fn };
