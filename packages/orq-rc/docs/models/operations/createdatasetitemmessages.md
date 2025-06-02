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
      type: "text",
      text: "<value>",
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
    "<value>",
  ],
  toolCallId: "<id>",
};
```

