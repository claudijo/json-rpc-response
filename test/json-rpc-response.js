var assert = require('assert');
var JsonRpcResponse = require('..');

describe('JSON RPC 2.0 response', function() {
  var result = 'some result';
  var error = new Error('some error');
  var id = 1;

  it('should create response using the `new` keyword', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res);
  });

  it('should create response without using the `new` keyword', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res instanceof JsonRpcResponse);
  });

  it('should create response with correct version', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res.jsonrpc === '2.0');
  });

  it('should create response with a result', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res.result === result);
  });

  it('should create response with an id', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res.id === id);
  });

  it('should create a response with undefined error if passing null as error', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(typeof res.error === 'undefined');
  });

  it('should create response with error', function() {
    var res = new JsonRpcResponse(id, error);
    assert(res.error === error);
  });

  it('should not include result property if result argument is undefined', function() {
    var res = new JsonRpcResponse(id, error);
    assert(!res.hasOwnProperty('result'))
  });

  it('should throw if passing both error and result arguments', function() {
    var invalidResponseError;

    try {
      new JsonRpcResponse(id, error, result);
    } catch (err) {
      invalidResponseError = err;
    }

    assert(invalidResponseError);
  });

  it('should throw if not passing an error nor an result', function() {
    var invalidResponseError;

    try {
      new JsonRpcResponse(id, null);
    } catch (err) {
      invalidResponseError = err;
    }

    assert(invalidResponseError);
  });

  it('should throw if not passing a sting or a number as id', function() {
    var invalidResponseError;

    try {
      new JsonRpcResponse(null, null, result);
    } catch (err) {
      invalidResponseError = err;
    }

    assert(invalidResponseError);
  });
});