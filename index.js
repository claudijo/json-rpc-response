var JsonRpcResponse = function(error, result, id) {
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
  this.result = result;
  this.id = id;

  if (error) {
    this.error = error;
  }
};

module.exports = JsonRpcResponse;