# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
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
  role: "assistant",
  content: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  role: "correction",
  url: "https://lavish-mouser.org",
};
```

