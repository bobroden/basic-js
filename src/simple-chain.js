const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(String(value));
    return this;
  },
  removeLink(position) {
    if(typeof(position) == "number" && position <= this.str.length - 1 && position > 0) {
      this.str.splice(position - 1, 1)
      return this;
    }
    else {
      this.str = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    var string = this.str;
    this.str = [];
    return "( " + string.join(' )~~( ') + " )";
  }
};

module.exports = chainMaker;
