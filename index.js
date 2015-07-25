var JsonRpcResponse = function(id, error, result) {
  if (!(this instanceof JsonRpcResponse)) {
    return new JsonRpcResponse(error, result, id);
  }

  if (error && result) {
    throw new Error('Invalid response');
  }

  if (typeof id !== 'string' && typeof id !== 'number') {
    throw new Error('Invalid response id');
  }

  this.jsonrpc = '2.0';
  this.id = id;

  if (typeof result !== 'undefined') {
    this.result = result;
  } else if (error) {
    this.error = error;
  } else {
    throw new Error('Invalid response');
  }
};

module.exports = JsonRpcResponse;