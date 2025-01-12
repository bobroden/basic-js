const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let char = '';
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(char !== str[i]) {
      if(count > 1) {
        res += count;
      }
      res += char;
      count = 1;
      char = str[i];
    }
    else {
      count++;
    }
    if(i === str.length - 1) {
      if(count > 1) {
        res += count;
      }
      res += char;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
