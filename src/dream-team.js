const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let securityName = [];
  let noSpaces ='';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      noSpaces = members[i].trim();
      securityName.push(noSpaces[0].toUpperCase());
    }
  }
  return securityName.sort().join('');
};