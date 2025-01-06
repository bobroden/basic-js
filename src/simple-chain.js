const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(typeof position === "number" && position <= this.chain.length - 1 && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain;
    this.chain = [];
    return `( ${str.join(' )~~( ')} )`;
  }
};

module.exports = {
  chainMaker
};
