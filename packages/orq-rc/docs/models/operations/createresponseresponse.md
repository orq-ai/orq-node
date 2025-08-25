# CreateResponseResponse


## Supported Types

### `operations.CreateResponseResponseBody`

```typescript
const value: operations.CreateResponseResponseBody = {
  id: "<id>",
  object: "response",
  createdAt: 7960.72,
  status: "incomplete",
  error: {
    code: "<value>",
    message: "<value>",
  },
  incompleteDetails: null,
  model: "911",
  output: [
    {
      id: "<id>",
      type: "function_call",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "incomplete",
    },
  ],
  parallelToolCalls: true,
};
```

### `EventStream<operations.CreateResponseProxyResponseBody>`

```typescript
const value: EventStream<operations.CreateResponseProxyResponseBody> = ;
```

