# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
  type: "tool_calls",
  role: "assistant",
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
  role: "expected_output",
  content: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  type: "image",
  role: "correction",
  url: "https://essential-tabletop.org/",
};
```

