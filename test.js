// const {logger2}  = require('./lib/logger');
const proxyquire = require('proxyquire').noCallThru();;
const sinon = require('sinon');
const { expect } = require('chai');

const logger = message => console.log(message);

const user = {
  setName(name) {
    name
  }
};

const logger2 = proxyquire('./lib/logger', {'./values': {name: 'mock'}});

logger2("thinst");

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

describe('Stubs', function() {
  it('Should return specific values', function() {
    const stub = sinon.stub(console, 'log');
    logger('Test');
    logger('Test');
    stub.restore();
    sinon.assert.callCount(stub, 2);
    sinon.assert.calledWith(stub, 'Test');
  });
});

describe('Mocks', function() {
  it('Should be called once and with specific values', function() {
    const mock = sinon.mock(console);
    mock.expects('log').once().withExactArgs('Test123');
    logger('Test123');
    mock.restore();
    mock.verify();    
  });

  it('Should be called once and with other values', function() {
    const mock = sinon.mock(console);
    mock.expects('log').once().withExactArgs('MyName');
    logger('MyName');
    mock.restore();
    mock.verify();    
  });

  it('ProxyQuire', function() {
    var spy = sinon.spy(logger2);
    spy("randy");
    expect(spy("randy")).to.be.equal('mockrandy');
    sinon.assert.calledTwice(spy);

  });
});