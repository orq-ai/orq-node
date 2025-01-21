# Message


## Supported Types

### `operations.Message1`

```typescript
const value: operations.Message1 = {
  role: "prompt",
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
  role: "correction",
  content: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  role: "tool",
  url: "https://wobbly-punctuation.com",
};
```

