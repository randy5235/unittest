const value = require('./values');

const logger2 = message => {
  console.log(value.name+message);
};

module.exports = logger2;