var JsonRpcResponse = function(id, error, result) {
  if (!(this instanceof JsonRpcResponse)) {
    return new JsonRpcResponse(id, error, result);
  }

  if (error && result) {
    throw new Error('Mutually exclusive error and result exist');
  }

  if (id !== null && typeof id !== 'string' && typeof id !== 'number') {
    throw new TypeError('Invalid id type ' + typeof id);
  }

  if (typeof result !== 'undefined') {
    this.result = result;
  } else if (error) {
    if (typeof error.code !== 'number') {
      throw new TypeError('Invalid error code type ' + typeof error.code);
    }

    if (typeof error.message !== 'string') {
      throw new TypeError('Invalid error message type ' + typeof error.message);
    }

    this.error = error;
  } else {
    throw new Error('Missing result or error');
  }

  this.jsonrpc = '2.0';
  this.id = id;
};

module.exports = JsonRpcResponse;
