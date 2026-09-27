# RetrieveDatapointMessages


## Supported Types

### `operations.RetrieveDatapointMessagesSystemMessage`

```typescript
const value: operations.RetrieveDatapointMessagesSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.RetrieveDatapointMessagesDeveloperMessage`

```typescript
const value: operations.RetrieveDatapointMessagesDeveloperMessage = {
  role: "developer",
  content: [],
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
  role: "assistant",
};
```

### `operations.RetrieveDatapointMessagesToolMessage`

```typescript
const value: operations.RetrieveDatapointMessagesToolMessage = {
  role: "tool",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
  toolCallId: "<id>",
};
```

