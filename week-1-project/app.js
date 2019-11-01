const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function(param) {
    // write me!
    if (typeof param === "string" && isNaN(param) === false) {
      return true;
    } else {
      return false;
    }
  },
  addString: function(param) {
    if (typeof param !== "string") return false;
    // write this early return condition
    else if (isNaN(param)) {
      this.NaNyStrings.push(param);
    } else if (!isNaN(param)) {
      this.numberyStrings.push(param);
    }
    return true;
  },
  allStrings: function() {
    // write me!
    if (this.NaNyStrings.length === 0) return this.numberyStrings;
    else if (this.numberyStrings.length === 0) return this.NaNyStrings;
    else return this.numberyStrings.concat(this.NaNyStrings);
  },
  evenStrings: function() {
    // write me!
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
    } else if (
      this.numberyStrings.length !== 0 &&
      this.NaNyStrings.length === 0
    ) {
      return this.numberyStrings.filter(Dena => Dena % 2 == 0);
    } else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0) {
      return this.numberyStrings.filter(Dena => Dena % 2 === 0);
    }
  },
  oddStrings: function() {
    // write me!
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
    } else if (
      this.numberyStrings.length !== 0 &&
      this.NaNyStrings.length === 0
    ) {
      return this.numberyStrings.filter(Dena => Dena % 2 !== 0);
    } else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0) {
      return this.numberyStrings.filter(Dena => Dena % 2 !== 0);
    }
  },
  negativeStrings: function() {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (
      this.NaNyStrings.length === 0 &&
      this.numberyStrings.length !== 0
    ) {
      function checkNegative(num) {
        return num < 0;
      }
      return this.numberyStrings.filter(checkNegative);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function checkNegative(num) {
        return num < 0;
      }
      return this.numberyStrings.filter(checkNegative);
    }
  },
  positiveStrings: function() {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (
      this.NaNyStrings.length === 0 &&
      this.numberyStrings.length !== 0
    ) {
      function checkPozitive(num) {
        return num > 0;
      }
      return this.numberyStrings.filter(checkPozitive);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function checkPozitive(num) {
        return num > 0 || num === "";
      }
      return this.numberyStrings.filter(checkPozitive);
    }
  },
  zeroStrings: function() {
    // write me!
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
    } else if (
      this.numberyStrings.length !== 0 &&
      this.NaNyStrings.length === 0
    ) {
      return this.numberyStrings.filter(Dena => Dena == 0.0 || Dena === "");
    } else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0) {
      return this.numberyStrings.filter(Dena => Dena == 0.0 || Dena === "");
    }
  },
  numberyAsNumbers: function() {
    // write me!
    return this.numberyStrings.map(str => Number(str));
  },
  NaNyAsNumbers: function() {
    // write me!
    return this.NaNyStrings.map(str => Number(str));
  },
  sumOfNumbery: function() {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) {
      return 0;
    }
    function add(a, b) {
      return a + b;
    }
    return this.numberyAsNumbers().reduce(add);
  },

  sumOfNaNy: function() {
    if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      return NaN;
    }
    function add(a, b) {
      return a + b;
    }
    return this.NaNyAsNumbers().reduce(add);
  }
};

// trying to fix the reason why can't I save through Git Kraken
