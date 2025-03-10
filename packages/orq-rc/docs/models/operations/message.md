# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
  type: "tool_calls",
  role: "system",
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
  role: "exception",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  type: "image",
  role: "tool",
  url: "https://responsible-dusk.com",
};
```

