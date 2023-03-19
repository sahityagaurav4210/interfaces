class IPrinter {
  constructor() {
    const obj = Object.create(this);

    if (obj.constructor === IPrinter) {
      throw new Error("Interfaces cannot be instantiated");
    }
  }
  print = (content) => {
    throw new Error("Not implemented");
  };

  scan = (content) => {
    throw new Error("Not implemented");
  };
}

module.exports = IPrinter;
