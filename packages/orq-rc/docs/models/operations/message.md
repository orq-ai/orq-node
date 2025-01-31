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
  role: "system",
  content: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  role: "system",
  url: "https://wise-word.info",
};
```

