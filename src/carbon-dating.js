const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof(sampleActivity) == "string")
		var h = parseFloat(sampleActivity);
	else
		return false;
	if(h > 0 && h < MODERN_ACTIVITY)
		return Math.ceil(Math.log(MODERN_ACTIVITY/h) * HALF_LIFE_PERIOD/0.693);
	else
		return false;
};
