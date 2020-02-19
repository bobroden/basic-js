module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	var tun = Math.pow(2, disksNumber) - 1;
	var second = tun / (turnsSpeed / 3600);
	var obj = {
		turns: tun,
		seconds: second,
	};
	return obj;
}