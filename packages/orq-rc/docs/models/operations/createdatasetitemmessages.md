# CreateDatasetItemMessages


## Supported Types

### `operations.CreateDatasetItemMessagesDeveloperMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.CreateDatasetItemMessagesSystemMessage`

```typescript
const value: operations.CreateDatasetItemMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.CreateDatasetItemMessagesUserMessage`

```typescript
const value: operations.CreateDatasetItemMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://earnest-baseboard.com",
      },
    },
  ],
};
```

### `operations.CreateDatasetItemMessagesAssistantMessage`

```typescript
const value: operations.CreateDatasetItemMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.CreateDatasetItemMessagesToolMessage`

```typescript
const value: operations.CreateDatasetItemMessagesToolMessage = {
  role: "tool",
  content: [
    "<value 1>",
  ],
  toolCallId: "<id>",
};
```

