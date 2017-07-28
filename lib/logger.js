const value = require('./values');

const logger2 = message => {
  return value.name+message;
};

module.exports = logger2;