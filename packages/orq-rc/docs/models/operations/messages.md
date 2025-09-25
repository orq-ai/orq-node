# Messages


## Supported Types

### `operations.MessagesDeveloperMessage`

```typescript
const value: operations.MessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.MessagesSystemMessage`

```typescript
const value: operations.MessagesSystemMessage = {
  role: "system",
  content: "<value>",
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
  role: "exception",
};
```

### `operations.MessagesToolMessage`

```typescript
const value: operations.MessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

