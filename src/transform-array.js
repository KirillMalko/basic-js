const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let array = arr.split();
  for(let i = 0; i<arr.length; i++){
    if (array[i] === '--double-next') {
      if(i !== array.length - 1){
        array[i] = array[i+1];
      }
    }
    if (array[i] === '--double-prev') {
      if (i !== 0) {
        array[i] = array[i - 1];
        i++;
      }
    }
    if (array[i] === '--discard-next') {
      if (i !== array.length - 1) {
        array[i + 1] = array[i];
        i++;
      }
    }
    if (array[i] === '--discard-prev') {
      if (i !== 0) {
        array[i - 1] = array[i];
      }
    }
  }
  return array.filter(
      (element) =>
          element !== '--discard-next' &&
          element !== '--discard-prev' &&
          element !== '--double-next' &&
          element !== '--double-prev'
  );
};
