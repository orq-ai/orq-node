# ListDatasetDatapointsMessages


## Supported Types

### `operations.ListDatasetDatapointsMessagesDeveloperMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.ListDatasetDatapointsMessagesSystemMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.ListDatasetDatapointsMessagesUserMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {
        fileData: "<value>",
        filename: "example.file",
      },
    },
  ],
};
```

### `operations.ListDatasetDatapointsMessagesAssistantMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesAssistantMessage = {
  role: "exception",
};
```

### `operations.ListDatasetDatapointsMessagesToolMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

