# CreateDatasetItemDatasetsMessages


## Supported Types

### `operations.CreateDatasetItemMessagesDatasetsSystemMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDatasetsSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.CreateDatasetItemMessagesDatasetsDeveloperMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDatasetsDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.CreateDatasetItemMessagesDatasetsUserMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDatasetsUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.CreateDatasetItemMessagesDatasetsAssistantMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDatasetsAssistantMessage = {
  role: "assistant",
};
```

### `operations.CreateDatasetItemMessagesDatasetsToolMessage`

```typescript
const value: operations.CreateDatasetItemMessagesDatasetsToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

