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

  it('should call user.setName Thrice', function() {
    var spy = sinon.spy(user,'setName');
    user.setName("Randy");
    user.setName("Lisa");
    user.setName("Lisa");
    sinon.assert.calledThrice(user.setName);
    sinon.assert.calledWith(user.setName, "Randy");
    sinon.assert.calledWith(user.setName, "Lisa");

  });
});