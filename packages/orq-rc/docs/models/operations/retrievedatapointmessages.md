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
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "wav",
      },
    },
  ],
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
    "<value>",
  ],
  toolCallId: "<id>",
};
```

