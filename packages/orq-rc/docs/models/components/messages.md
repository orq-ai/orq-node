# Messages


## Supported Types

### `components.Messages1`

```typescript
const value: components.Messages1 = {
  role: "developer",
  content: "<value>",
};
```

### `components.Messages2`

```typescript
const value: components.Messages2 = {
  role: "system",
  content: "<value>",
};
```

### `components.Messages3`

```typescript
const value: components.Messages3 = {
  role: "user",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `components.Messages4`

```typescript
const value: components.Messages4 = {
  role: "assistant",
};
```

### `components.Messages5`

```typescript
const value: components.Messages5 = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

