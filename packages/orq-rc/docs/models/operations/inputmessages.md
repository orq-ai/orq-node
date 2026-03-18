# InputMessages


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesSystemMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesSystemMessage =
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

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesDeveloperMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesDeveloperMessage =
    {
      role: "developer",
      content: [],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesUserMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesUserMessage =
    {
      role: "user",
      content: [],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAssistantMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAssistantMessage =
    {
      role: "assistant",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesToolMessage`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesToolMessage =
    {
      role: "tool",
      content: "<value>",
      toolCallId: "<id>",
    };
```

