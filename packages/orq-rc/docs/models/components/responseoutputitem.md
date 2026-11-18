# ResponseOutputItem

One item of a response's output. The `type` field says which kind it is.


## Supported Types

### `components.ResponseOutputMessage`

```typescript
const value: components.ResponseOutputMessage = {
  content: [],
  role: "<value>",
  type: "message",
};
```

### `components.ResponseOutputFunctionCall`

```typescript
const value: components.ResponseOutputFunctionCall = {
  arguments: "<value>",
  callId: "<id>",
  name: "<value>",
  type: "function_call",
};
```

### `components.ResponseOutputFunctionCallOutput`

```typescript
const value: components.ResponseOutputFunctionCallOutput = {
  callId: "<id>",
  type: "function_call_output",
};
```

### `components.ResponseOutputReasoning`

```typescript
const value: components.ResponseOutputReasoning = {
  type: "reasoning",
};
```

### `components.ResponseOutputOrqToolCall`

```typescript
const value: components.ResponseOutputOrqToolCall = {
  callId: "<id>",
  name: "<value>",
  type: "<value>",
};
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

