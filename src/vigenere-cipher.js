const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(ver = true) {
		this.value = ver;
  }

  encrypt(string, key) {
    if(string === undefined || key === undefined)
      throw new Error('Incorrect arguments!')
    if (!this.value)
      string = string.split("").reverse().join("");
    let startPos = 'a'.charCodeAt(0);
    let str = "";
    let ras = string.length - key.length;
    for(let i = 0; i < ras; i++)
      key += key[i];
    let t = 0;
    for(let i = 0; i < string.length; i++) {
      let currentPos = string[i].toLowerCase().charCodeAt(0);
        if(currentPos < 97 || currentPos > 122) {
          t++;
          str += string[i];
          continue;
        }
        let res = currentPos - startPos;
        let currentPos2 = key[i-t].toLowerCase().charCodeAt(0);
        let res2 = currentPos2 - startPos;
        let result = (res + res2) % 26 + startPos;
        str += String.fromCharCode(result);
    }
    return str.toUpperCase();
    }

  decrypt(string, key) {
    if(string === undefined || key === undefined)
      throw new Error('Incorrect arguments!')
    if (!this.value)
      string = string.split("").reverse().join("");
    let startPos = 'a'.charCodeAt(0);
    let str = "";
    let ras = string.length - key.length;
    for(let i = 0; i < ras; i++)
      key += key[i];
    let t = 0;
    for(let i = 0; i < string.length; i++) {
      let currentPos = string[i].toLowerCase().charCodeAt(0);
      if(currentPos < 97 || currentPos > 122) {
          t++;
          str += string[i];
          continue;
      }
      let c = currentPos - startPos;
      let currentPos2 = key[i-t].toLowerCase().charCodeAt(0);
      let k = currentPos2 - startPos;
      let result = (c + 26 - k)%26 + startPos;
      str += String.fromCharCode(result);
    }
    return str.toUpperCase();
    }
}

module.exports = {
  VigenereCipheringMachine
};
