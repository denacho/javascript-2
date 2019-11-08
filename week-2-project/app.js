/*
  many of the exercises have focused on avoiding side effects
  this project is the opposite, you want to modify object.entries
  otherwise how can it save anything!

  You can even think of this week's object as a mini data base
  - there's a store of data in object.entries
  - and users can access & modify that data
*/

const object = {
  entries: {},
  isPrimitive: function(value) {
    // write me!
    return value !== Object(value);
  },
  hasKey: function(obj, key) {
    // write me!
    return Object.keys(obj).some(v => v == key);
  },
  hasValue: function(obj, value) {
    // write me!
    return Object.values(obj).includes(value);
  },
  addEntry: function(key, value) {
    if (typeof key !== "string") {
      // write me!
      return new TypeError("addEntry: key should be a string");
    }
    if (!this.isPrimitive(value)) {
      // write me! (using this.isPrimitive)
      return new TypeError("addEntry: value should be a primitive");
    }
    if (this.hasKey(this.entries, key)) {
      // write me! (using this.hasKey)
      return new Error(`addEntry: key "${key}" already exists`);
    } else {
      this.entries[key] = value;
      return true;
    } // write me!
  },
  removeEntry: function(key) {
    if (typeof key !== "string") {
      // write me!
      return new TypeError("removeEntry: key should be a string");
    }
    if (!this.hasKey(this.entries, key)) {
      // write me! (using this.hasKey)
      return new ReferenceError(
        `removeEntry: no property "${key}" in this.entries`
      );
    }
    // write me!
  },
  updateEntry: function(key, value) {
    if (typeof key !== "string") {
      // write me!
      return new TypeError("updateEntry: key should be a string");
    }
    if (typeof value === "object") {
      // write me! (using this.isPrimitive)
      return new TypeError("updateEntry: value should be a primitive");
    }
    if (!this.hasKey(this.entries, key)) {
      // write me! (using this.hasKey)
      return new ReferenceError(
        `updateEntry: no property "${key}" in this.entries`
      );
    } else {
      this.entries[key] = value;
      return true;
    }
  },
  readAll: function() {
    // write me!
  },
  findByKey: function(key) {
    if (null) {
      // write me!
      return new TypeError("findByKey: key should be a string");
    }
    if (null) {
      // write me! (using this.hasKey)
      return new ReferenceError(
        `findByKey: no property "${key}" in this.entries`
      );
    }

    // write me!
  },
  findByValue: function(value) {
    if (null) {
      // write me! (using this.isPrimitive)
      return new TypeError("findByValue: value should be a primitive");
    }
    if (null) {
      // write me! (using this.hasValue)
      return new ReferenceError(
        `findByValue: no entry with value (${typeof value}, ${value})`
      );
    }

    // write me! (this one is a bit trickier)
  }
};
