# UpdateDatapointDatasetsMessages


## Supported Types

### `operations.UpdateDatapointMessagesDatasetsDeveloperMessage`

```typescript
const value: operations.UpdateDatapointMessagesDatasetsDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.UpdateDatapointMessagesDatasetsSystemMessage`

```typescript
const value: operations.UpdateDatapointMessagesDatasetsSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.UpdateDatapointMessagesDatasetsUserMessage`

```typescript
const value: operations.UpdateDatapointMessagesDatasetsUserMessage = {
  role: "user",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.UpdateDatapointMessagesDatasetsAssistantMessage`

```typescript
const value: operations.UpdateDatapointMessagesDatasetsAssistantMessage = {
  role: "assistant",
};
```

### `operations.UpdateDatapointMessagesDatasetsToolMessage`

```typescript
const value: operations.UpdateDatapointMessagesDatasetsToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

