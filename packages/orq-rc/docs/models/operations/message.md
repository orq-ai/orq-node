# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
  role: "exception",
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
  role: "assistant",
  url: "https://serpentine-address.net/",
};
```

