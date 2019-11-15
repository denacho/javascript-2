const object = {
  currentKey: "",
  set currentEntry(key) {
    if (typeof key !== "string") {
      // write the early return condition
      throw new TypeError("set currentEntry: key should be a string");
    }
    if (!this.entries.hasOwnProperty(key)) {
      // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
    // write me!
    this.currentKey = key;
    return true;
  },
  get currentEntry() {
    // write me!
    return this.findByKey(this.currentKey);
  },
  likedKeys: [],
  get likedEntries() {
    // write me!
  },
  likeEntry: function(key) {
    if (typeof key !== "string") {
      // write the early return condition
      return new TypeError("likeEntry: key should be a string");
    }
    if (!this.entries.hasOwnProperty(key)) {
      // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (this.likedKeys.includes(key)) {
      // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }
    this.likedKeys.push(key);
    if (this.addEntry()) {
      return true;
    }
    // write me!
  },
  unlikeEntry: function(key) {
    if (typeof key !== "string") {
      // write the early return condition
      return new TypeError("unlikeEntry: key should be a string");
    }
    if (!this.likedKeys.includes(key)) {
      // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }
    this.likedKeys.unshift(key);
    return true;
    // write me!
  },
  entries: {},
  isPrimitive: function(value) {
    return value !== Object(value);
    // write me!
  },
  hasKey: function(obj, key) {
    return obj.hasOwnProperty(key);
    // write me!
  },
  hasValue: function(obj, value) {
    return Object.values(obj).includes(value);
    // write me!
  },
  addEntry: function(key, value) {
    if (typeof key !== "string") {
      return new TypeError("addEntry: key should be a string");
    }
    if (!this.isPrimitive(value)) {
      return new TypeError("addEntry: value should be a primitive");
    }
    if (this.hasKey(this.entries, key)) {
      return new Error(`addEntry: key "${key}" already exists`);
    } else {
      this.entries[key] = value;
      return true;
    }
  },
  // write me!
  removeEntry: function(key) {
    if (typeof key !== "string") {
      return new TypeError("addEntry: key should be a string");
    }
    if (this.hasKey(this.entries, key)) {
      return new Error(`addEntry: key "${key}" already exists`);
    }
    delete this.entries[key];
    return true;
    // write me!
  },
  updateEntry: function(key, value) {
    if (typeof key !== "string") {
      return new TypeError("updateEntry: key should be a string");
    }
    if (!this.isPrimitive(value)) {
      return new TypeError("updateEntry: value should be a primitive");
    }
    if (!this.hasKey(this.entries, key)) {
      return new ReferenceError(
        `updateEntry: no property "${key}" in this.entries`
      );
    }

    // write me!
  },
  readAll: function() {
    // write me!
  },
  findByKey: function(key) {
    // write me!
  },
  findByValue: function(value) {
    // write me!
  }
};
