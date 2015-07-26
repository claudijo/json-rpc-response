# JSON RPC 2.0 Response

Constructor for
[JSON RPC 2.0 response objects](http://www.jsonrpc.org/specification#response_object).

## Installation

```js
npm install json-rpc-response
```

## Usage

```js
new JsonRpcResponse(id, error, result);
```

Response objects can be constructed with or without using the `new` keyword.

Arguments `error` and `result` are mutually exclusive. Argument `result` must be
undefined if passing `error`. Pass `null` as error if `result` exists.

### Example

```js
var JsonRpcResponse = require('json-rpc-response');

// Result response
new JsonRpcResponse('1', null, 'some result');

// Error response
new JsonRpcResponse('2', { code: -1, message: 'some error' });
```

## Test

Run unit tests;

`$ npm test`

# License

[MIT](LICENSE)
