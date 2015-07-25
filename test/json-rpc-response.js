var assert = require('assert');
var JsonRpcResponse = require('..');

describe('JSON RPC 2.0 response', function() {
  var result = 'some result';
  var error = new Error('some error');
  var idNum = 1;
  var idStr = '1';

  it('should create response using the `new` keyword', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(res);
  });

  it('should create response without using the `new` keyword', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(res instanceof JsonRpcResponse);
  });

  it('should create response with correct version', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(res.jsonrpc === '2.0');
  });

  it('should create response with a result', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(res.result === result);
  });

  it('should create response with an id', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(res.id === idNum);
  });

  it('should create a response with undefined error if passing null as error', function() {
    var res = new JsonRpcResponse(null, result, idNum);
    assert(typeof res.error === 'undefined');
  });

  it('should throw if not passing string or integer as id', function() {
    var invalidResponseError;

    try {
      new JsonRpcResponse(null, result, true);
    } catch (err) {
      invalidResponseError = err;
    }

    assert(invalidResponseError);
  });

  it('should create response with error', function() {
    var res = new JsonRpcResponse(error, null, idNum);
    assert(res.error === error);
  });

  it('should throw if passing both error and result arguments', function() {
    var invalidResponseError;

    try {
      new JsonRpcResponse(error, result, idNum);
    } catch (err) {
      invalidResponseError = err;
    }

    assert(invalidResponseError);
  });
});