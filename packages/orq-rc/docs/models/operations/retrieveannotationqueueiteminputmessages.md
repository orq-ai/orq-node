# RetrieveAnnotationQueueItemInputMessages


## Supported Types

### `operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesSystemMessage`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesSystemMessage =
    {
      role: "system",
      content: "<value>",
    };
```

### `operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesDeveloperMessage`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesDeveloperMessage =
    {
      role: "developer",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesUserMessage`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesUserMessage = {
    role: "user",
    content: "<value>",
  };
```

### `operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesAssistantMessage`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesAssistantMessage =
    {
      role: "assistant",
    };
```

### `operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesToolMessage`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesToolMessage = {
    role: "tool",
    content: [],
    toolCallId: "<id>",
  };
```

