# ListDatasetDatapointsMessages


## Supported Types

### `operations.ListDatasetDatapointsMessagesSystemMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.ListDatasetDatapointsMessagesDeveloperMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesDeveloperMessage = {
  role: "developer",
  content: [],
};
```

### `operations.ListDatasetDatapointsMessagesUserMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {},
    },
  ],
};
```

### `operations.ListDatasetDatapointsMessagesAssistantMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.ListDatasetDatapointsMessagesToolMessage`

```typescript
const value: operations.ListDatasetDatapointsMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: null,
};
```

