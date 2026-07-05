# DeploymentGetConfigMessages


## Supported Types

### `operations.MessagesSystemMessage`

```typescript
const value: operations.MessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.MessagesDeveloperMessage`

```typescript
const value: operations.MessagesDeveloperMessage = {
  role: "developer",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.MessagesUserMessage`

```typescript
const value: operations.MessagesUserMessage = {
  role: "user",
  content: [],
};
```

### `operations.MessagesAssistantMessage`

```typescript
const value: operations.MessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.MessagesToolMessage`

```typescript
const value: operations.MessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: null,
};
```

