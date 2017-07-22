const sinon = require('sinon');
const Database = {
  save(user, cb) {
    return;
  }
};

function setupNewUser(info, callback) {
  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  try {
    Database.save(user, callback);
  }
  catch(err) {
    callback(err);
  }
}

it('should call save once', function() {
  var save = sinon.spy(Database, 'save');

  setupNewUser({ name: 'test' }, function() { });

  save.restore();
  sinon.assert.calledOnce(save);
});

it('should pass object with correct values to save', function() {
  var save = sinon.spy(Database, 'save');
  var info = { name: 'test' };
  var expectedUser = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  setupNewUser(info, function() { });

  save.restore();
  sinon.assert.calledWith(save, expectedUser);
});