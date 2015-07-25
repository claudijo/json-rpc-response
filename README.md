# JSON RPC 2.0 Response

Constructor for JSON RPC 2.0 response objects.

## Installation

```js
npm install json-rpc-response
```

## Usage

Response objects can be constructed with or without using the `new` keyword.

```js
var JsonRpcResponse = require('json-rpc-response');

// Simple response
var response = new JsonRpcResponse(null, 'some response', '1');

// Error response
var errorResponse = new JsonRpcResponse({ code: -1, message: 'some error' }, null, '2');
```