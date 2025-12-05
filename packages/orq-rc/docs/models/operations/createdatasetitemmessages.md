# CreateDatasetItemMessages


## Supported Types

### `operations.CreateDatasetItemMessagesSystemMessage`

```typescript
const value: operations.CreateDatasetItemMessagesSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.CreateDatasetItemMessagesDeveloperMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDeveloperMessage = {
  role: "developer",
  content: [],
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
        url: "https://fatal-overload.name/",
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
  content: [],
  toolCallId: "<id>",
};
```

