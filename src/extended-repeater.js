module.exports = function repeater(str, options) {
    if(str == null)
    	str = "null";
    str = str.toString();
    var repeatTimes = options.repeatTimes;
    var separator = options.separator;
    if(separator == undefined)
    	separator = "+";
    var addition = options.addition;
    if(addition === null) {
    	addition = "null";
    }
    if(addition === undefined)
    	var addition = "";
    var additionRepeatTimes = options.additionRepeatTimes;
    var additionSeparator = options.additionSeparator;
    if(additionSeparator == undefined)
    	additionSeparator = "|";
    var string = addition;
    for(var i = 1; i < additionRepeatTimes; i++) {
    	string += additionSeparator + addition;
    }
    var s = str + string;
    for(var i = 1; i < repeatTimes; i++) {
    	s += separator + str + string;
    }
    return s;
};
  