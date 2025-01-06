const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(str == null)
    str = "null";
  if(typeof str !== "string") {
    str = String(str);
  }
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = "";
  if(separator == undefined)
    separator = "+";
  addition = options.addition;
  if(addition === null) {
    addition = "null";
  }
  if(addition === undefined)
    addition = "";
  if(typeof addition !== "string") {
    addition = String(addition);
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  if(additionSeparator == undefined)
    additionSeparator = "|";
  let string = addition;
  for(let i = 1; i < additionRepeatTimes; i++) {
    string += additionSeparator + addition;
  }
  let s = str + string;
  for(let i = 1; i < repeatTimes; i++) {
    s += separator + str + string;
  }
  return s;
}

module.exports = {
  repeater
};
