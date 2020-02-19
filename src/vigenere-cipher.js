class VigenereCipheringMachine {
	constructor(ver = true) {
		this.value = ver;
    }
    encrypt(string, key) {
        if(string === undefined || key === undefined)
        	throw new Error()
        if (!this.value)
        	string = string.split("").reverse().join("");	
        var startPos = 'a'.charCodeAt(0);
        var str = "";
        var ras = string.length - key.length;
        for(var i = 0; i < ras; i++)
        	key += key[i];
        var t = 0;
        for(var i = 0; i < string.length; i++) {
        	var currentPos = string[i].toLowerCase().charCodeAt(0);
        		if(currentPos < 97 || currentPos > 122) {
        			t++;
        			str += string[i];
        			continue;
        		}
	        	var res = currentPos - startPos;
	        	var currentPos2 = key[i-t].toLowerCase().charCodeAt(0);
	        	var res2 = currentPos2 - startPos;
	        	var result = (res + res2) % 26 + startPos;
	        	str += String.fromCharCode(result);
        }
        return str.toUpperCase();
    }
    decrypt(string, key) {
        if(string === undefined || key === undefined)
        	throw new Error()
        if (!this.value)
        	string = string.split("").reverse().join("");
        var startPos = 'a'.charCodeAt(0);
        var st = "";
        var ras = string.length - key.length;
        for(var i = 0; i < ras; i++)
        	key += key[i];
        var t = 0;
        for(var i = 0; i < string.length; i++) {
        	var currentPos = string[i].toLowerCase().charCodeAt(0);
        	if(currentPos < 97 || currentPos > 122) {
        			t++;
        			st += string[i];
        			continue;
        	}
        	var c = currentPos - startPos;
        	var currentPos2 = key[i-t].toLowerCase().charCodeAt(0);
        	var k = currentPos2 - startPos;
        	var result = (c + 26 - k)%26 + startPos;
        	st += String.fromCharCode(result);
        }
        return st.toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
