const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  throw new CustomError('Not implemented');
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].map(event => (e === '^^') && array.push(event))
  }
  return array.length
};
