module.exports = class DepthCalculator {
    calculateDepth(arr) {
    	var gl = 1
		if (Array.isArray(arr)) {
      		for (var item of arr) 
        		if (Array.isArray(item)) 
          			gl = Math.max(this.calculateDepth(item) + 1, gl)
			return gl;
		}
		return 0;
	}
};