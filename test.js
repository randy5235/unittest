const sinon = require('sinon');

const logger = message => console.log(message);

it('should call logger once', function() {
  var logger = sinon.spy(logger);
  logger("test");
  //logger.restore();
  sinon.assert.calledOnce(logger);
  sinon.assert.calledWith(logger, "test");
});
