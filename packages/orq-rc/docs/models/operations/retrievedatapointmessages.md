# RetrieveDatapointMessages


## Supported Types

### `operations.RetrieveDatapointMessagesDeveloperMessage`

```typescript
const value: operations.RetrieveDatapointMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.RetrieveDatapointMessagesSystemMessage`

```typescript
const value: operations.RetrieveDatapointMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.RetrieveDatapointMessagesUserMessage`

```typescript
const value: operations.RetrieveDatapointMessagesUserMessage = {
  role: "user",
  content: [],
};
```

### `operations.RetrieveDatapointMessagesAssistantMessage`

```typescript
const value: operations.RetrieveDatapointMessagesAssistantMessage = {
  role: "exception",
};
```

### `operations.RetrieveDatapointMessagesToolMessage`

```typescript
const value: operations.RetrieveDatapointMessagesToolMessage = {
  role: "tool",
  content: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  toolCallId: "<id>",
};
```

