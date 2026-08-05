# InputMessages


## Supported Types

### `operations.RetrieveAnnotationQueueItemMessagesSystemMessage`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.RetrieveAnnotationQueueItemMessagesDeveloperMessage`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.RetrieveAnnotationQueueItemMessagesUserMessage`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessagesUserMessage = {
  role: "user",
  content: [],
};
```

### `operations.RetrieveAnnotationQueueItemMessagesAssistantMessage`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.RetrieveAnnotationQueueItemMessagesToolMessage`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

