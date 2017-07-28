const sinon = require('sinon');

const testFunction = value => {
  console.log(value);
};

describe('Spy', function() {
  var spy = sinon.spy(testFunction);
  before( function() {
    spy("TestValue");
    spy("TestValue");
    spy("TestValue");
    spy("TestValue");
    spy("Randy");
    
  });

  it('should be called once', function() {

  // console.log(spy);
  // sinon.assert.calledOnce(spy);
  sinon.assert.calledWith(spy, "TestValue");
  sinon.assert.callCount(spy,5);

  });

  it('Should be called with Randy', function() {

    sinon.assert.calledWith(spy, 'Randy');
  });
});