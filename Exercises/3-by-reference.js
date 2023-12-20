'use strict';

const obj = {
  n: 5
};

const inc = (obj) => {
  if (typeof obj === 'object') ++obj.n;
};

inc(obj);

module.exports = { inc };
