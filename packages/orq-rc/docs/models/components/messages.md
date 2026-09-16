# Messages


## Supported Types

### `components.MessagesSystemMessage`

```typescript
const value: components.MessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `components.MessagesDeveloperMessage`

```typescript
const value: components.MessagesDeveloperMessage = {
  role: "developer",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `components.MessagesUserMessage`

```typescript
const value: components.MessagesUserMessage = {
  role: "user",
  content: [],
};
```

### `components.MessagesAssistantMessage`

```typescript
const value: components.MessagesAssistantMessage = {
  role: "assistant",
};
```

### `components.MessagesToolMessage`

```typescript
const value: components.MessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: null,
};
```

