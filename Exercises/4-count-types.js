'use strict';

const countTypesInArray = (arr) => {
  const colObj = { };
  for (const el of arr) {
    let count = colObj[typeof el] || 0;
    colObj[typeof el] = ++count;
  }
  return colObj;
};

module.exports = { countTypesInArray };
