# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputMessages


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueSystemMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueSystemMessage =
    {
      role: "system",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueDeveloperMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueDeveloperMessage =
    {
      role: "developer",
      content: "<value>",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueUserMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueUserMessage =
    {
      role: "user",
      content: [
        {
          type: "file",
          file: {},
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueAssistantMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueAssistantMessage =
    {
      role: "assistant",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueToolMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueToolMessage =
    {
      role: "tool",
      content: "<value>",
      toolCallId: "<id>",
    };
```

