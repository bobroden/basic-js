module.exports = function transform(arr) {
	if(Object.prototype.toString.call(arr) != '[object Array]')
		throw new Error();
    var res = [];
    for(var i = 0; i < arr.length; i++)
        if (arr[i] == '--discard-prev' && i > 0)
            res.pop();
        else if (arr[i] == '--double-prev' && i > 0)
            res.push(arr[i - 1]);
        else if (arr[i] == '--double-next' && i < arr.length - 1)
            res.push(arr[i + 1]);
        else if (arr[i] == '--discard-next' && i < arr.length -1)
        	i++;
        else if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next")
        	res.push(arr[i]);
    return res;
}