# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
  type: "tool_calls",
  role: "expected_output",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

### `operations.Message2`

```typescript
const value: operations.Message2 = {
  type: "content",
  role: "correction",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  type: "image",
  role: "user",
  url: "https://impure-department.com/",
};
```

