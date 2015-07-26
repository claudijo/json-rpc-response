var assert = require('assert');
var JsonRpcResponse = require('..');

var result = 'some result';
var error = { code: -1, message: 'some error' };
var id = 1;

describe('JSON RPC 2.0 response', function() {
  it('should create response using the `new` keyword', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res.id === id);
    assert(res.error === undefined);
    assert(res.result === result);
  });

  it('should create response without using the `new` keyword', function() {
    var res = JsonRpcResponse(id, null, result);
    assert(res.id === id);
    assert(res.error === undefined);
    assert(res.result === result);
  });

  it('should create response with correct version', function() {
    var res = new JsonRpcResponse(id, null, result);
    assert(res.jsonrpc === '2.0');
  });

  it('should create response with error', function() {
    var res = new JsonRpcResponse(id, error);
    assert(res.error === error);
  });

  it('should throw if error lacks number code property', function() {
    var responseError;

    try {
      new JsonRpcResponse(id, { message: 'some message'} );
    } catch (err) {
      responseError = err;
    }

    assert(responseError);
  });

  it('should throw if error lacks string message property', function() {
    var responseError;

    try {
      new JsonRpcResponse(id, { code: -1} );
    } catch (err) {
      responseError = err;
    }

    assert(responseError);
  });

  it('should not include result property if result argument is undefined', function() {
    var res = new JsonRpcResponse(id, error);
    assert(!res.hasOwnProperty('result'));
  });

  it('should throw if passing both error and result arguments', function() {
    var responseError;

    try {
      new JsonRpcResponse(id, error, result);
    } catch (err) {
      responseError = err;
    }

    assert(responseError);
  });

  it('should throw if not passing an error nor a result', function() {
    var responseError;

    try {
      new JsonRpcResponse(id, null);
    } catch (err) {
      responseError = err;
    }

    assert(responseError);
  });

  it('should throw if not passing a string or a number as id', function() {
    var responseError;

    try {
      new JsonRpcResponse(true, null, result);
    } catch (err) {
      responseError = err;
    }

    assert(responseError);
  });
});
