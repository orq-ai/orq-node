# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
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
  role: "exception",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  role: "tool",
  url: "https://responsible-dusk.com",
};
```

