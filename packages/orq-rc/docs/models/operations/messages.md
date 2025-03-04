# Messages


## Supported Types

### `operations.Messages1`

```typescript
const value: operations.Messages1 = {
  role: "developer",
  content: "<value>",
};
```

### `operations.Messages2`

```typescript
const value: operations.Messages2 = {
  role: "system",
  content: "<value>",
};
```

### `operations.Messages3`

```typescript
const value: operations.Messages3 = {
  role: "user",
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "mp3",
      },
    },
  ],
};
```

### `operations.Messages4`

```typescript
const value: operations.Messages4 = {
  role: "assistant",
};
```

### `operations.Messages5`

```typescript
const value: operations.Messages5 = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

