const IPrinter = require("./interfaces/IPrinter");

class CannonPixma extends IPrinter {
  constructor() {
    super();
  }
  print = (content) => {
    console.log("Printing...");
    console.log(content);
    console.log("Printed...");
  };
}

module.exports = CannonPixma;
