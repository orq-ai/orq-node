# CreateResponseResponse


## Supported Types

### `operations.CreateResponseResponseBody`

```typescript
const value: operations.CreateResponseResponseBody = {
  id: "<id>",
  object: "response",
  createdAt: 7960.72,
  status: "incomplete",
  incompleteDetails: {
    reason: "max_output_tokens",
  },
  model: "911",
  output: [
    {
      id: "<id>",
      type: "reasoning",
    },
  ],
  parallelToolCalls: false,
};
```

### `EventStream<operations.CreateResponseRouterResponsesResponseBody>`

