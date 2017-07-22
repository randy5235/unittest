const sinon = require('sinon');

const logger = message => console.log(message);

const user = {
  setName(name) {
    name
  }
};
describe('Spies', function() {
  it('should call logger once', function() {
    var logger = sinon.spy(logger);
    logger("test");
    //logger.restore();
    sinon.assert.calledOnce(logger);
    sinon.assert.calledWith(logger, "test");
  });

  it('should call user.setName once', function() {
    var spy = sinon.spy(user,'setName');
    user.setName("Randy");
    sinon.assert.calledOnce(user.setName);
    sinon.assert.calledWith(user.setName, "Randy");

  });
});