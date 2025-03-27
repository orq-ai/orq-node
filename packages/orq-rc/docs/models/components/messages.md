# Messages


## Supported Types

### `components.MessagesDeveloperMessage`

```typescript
const value: components.MessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `components.MessagesSystemMessage`

```typescript
const value: components.MessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `components.MessagesUserMessage`

```typescript
const value: components.MessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://afraid-nun.net",
      },
    },
  ],
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
  toolCallId: "<id>",
};
```

